import { AddBudgetsCont } from "./AddBudgetsStyle"
import { FaPlusCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import { getUserLocalStorage } from "context/utils/utils";
import { SetBudget } from "../utilsBudgets";

import { IAddBudgets } from "interfaces/Budgets/addbudget.model";

export const AddBudgets = ({closeAddBudget, setAllBudgets, setError}:  IAddBudgets) => {

    const [budget, setBudget] = useState({
        name: '',
        client: '',
        description: '',
        startDate: '',
        finalDate: '',
        value: '',
    })

    async function AddBudget() {
        
        const budgetObj = {
            name: budget.name,
            client: budget.client,
            description: budget.description,
            startDate: formatDate(budget.startDate),
            finalDate: formatDate(budget.finalDate),
            value: budget.value,
            idUser: getUserLocalStorage().id
        }

        const newBudget = await SetBudget(budgetObj);
        if(newBudget.erro) {
            return setError(true);
        }

        if(!newBudget.erro) {
            setAllBudgets((prevState: any) => [...prevState, budgetObj]);
            closeAddBudget(false);
            return; 
           
        }
    }

    const formatDate = (date: string): string => {
        date = date.replace('-', '').replace('-', '');
        return date
    }



    return (
        <AddBudgetsCont>
            <div className="addHeader">

                <div className="budgetsName">
                    <label className="labelDefault">Novo orçamento</label>
                    <input 
                        className="inputDefault" 
                        type="text" 
                        value={budget.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(prevState => ({...prevState, name: e.target.value}))}
                    />
                </div>

                <div className="budgetsClient">
                    <label className="labelDefault">Cliente</label>
                    <input 
                        className="inputDefault" 
                        type="text"
                        value={budget.client}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(prevState => ({...prevState, client: e.target.value}))}
                    />
                </div>

            </div>

            <div className="budgets">
                <div className="desc">
                    <label className="labelDefault">Descrição das atividades</label>
                    <input 
                        className="inputDefault" 
                        placeholder="Explicação das atividades a serem realizadas ..."
                        type="text"
                        value={budget.description}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(prevState => ({...prevState, description: e.target.value}))}
                        required={true}
                        />
                </div>

                <div className="budgetsFooter">

                    <div className="budgetsItems">
                        <div className="start">
                            <label className="labelDefault">Data Inicio</label>
                            <input 
                                type="date" 
                                className="inputDefault"
                                value={budget.startDate}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(prevState => ({...prevState, startDate: e.target.value}))}
                                required={true}
                            />
                        </div>

                        <div className="final">
                            <label className="labelDefault">Data Final</label>
                            <input 
                                type="date" 
                                className="inputDefault"
                                value={budget.finalDate}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(prevState => ({...prevState, finalDate: e.target.value}))}
                                required
                            />
                        </div>

                        <div className="value">
                            <label className="labelDefault">Valor</label>
                            <input 
                                type="number" 
                                className="inputDefault"
                                value={budget.value}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(prevState => ({...prevState, value: e.target.value}))}
                                required
                            />
                        </div>
                    </div>

                    <button className="buttonDefault" onClick={AddBudget}>
                        <FaPlusCircle className="iconAdd"/>
                        Cadastrar Orçamento
                    </button>
                </div>
            </div>

        </AddBudgetsCont>
    )
}