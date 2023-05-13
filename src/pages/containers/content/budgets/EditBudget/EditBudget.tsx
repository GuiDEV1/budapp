import { IEditBudget } from "interfaces/Budgets/editbudget.model"
import { useEffect, useRef, useState } from "react"
import { FiCalendar, FiX } from "react-icons/fi"
import { formatDate, updateBudget } from "../utilsBudgets"
import { EditButton, ModalCont, ModalOptions } from "./EditBudgetStyle"

export const EditBudget = ({handleModal, budgetToEdit, renderList, setError }: IEditBudget) => {

    const [budget, setBudget] = useState({
        name: budgetToEdit.name,
        client: budgetToEdit.client,
        description: budgetToEdit.description,
        startDate: formatDate(budgetToEdit.startDate.toString()),
        finalDate: formatDate(budgetToEdit.finalDate.toString()),
        value: budgetToEdit.value
    })

    const startDateRef: any = useRef();
    const finalDateRef: any = useRef();

    const [calendar, setCalendar] = useState({
        start: true,
        final: true,
    })


    const handleDate = (ref: any, icon: string) => {
        ref.current.type="date";

        setCalendar(prevState => ({
            ...prevState,
            [icon]: false
        }));

    }

    async function editBudget() {
        let formatStartDate = '';
        const confirmStartDate = [...budget.startDate];
        if(confirmStartDate.includes('-')) {
            formatStartDate = dateFormat(budget.startDate)
        }

        let formatFinalDate = '';
        const confirmFinalDate = [...budget.finalDate];
        if(confirmFinalDate.includes('-')){
            formatFinalDate = dateFormat(budget.finalDate);
        }

        const budgetEdit = {
            "name": budgetToEdit.name,
            "idUser": budgetToEdit.idUser,
            "newClient": budget.client,
            "newDesc": budget.description,
            "newStartDate": formatStartDate,
            "newFinalDate": formatFinalDate,
            "newValue": budget.value,
            "newName": budget.name
        }

        console.log(budgetEdit)

        const budgetResponse = await updateBudget(budgetEdit);
        if(budgetResponse.erro) {
            setError(true);
            return null;
        }

        handleModal(false);
        renderList();
    }

    const dateFormat = (date: string): string => {
        date = date.replaceAll('-', '').replaceAll('/', '');
        return date
    }


    return (
        <ModalCont>
            <ModalOptions>
                <div className="modalHeader">
                    <div>
                        <h4>Alterar orçamento</h4>
                        <p>Altere as informações do orçmaneot de acordo com suas necessidades!</p>
                    </div>
                    <FiX className="exitIcon" onClick={() => handleModal(false)}/>
                </div>

                <div className="names">
                    <div className="name">
                        <label className="labelDefault">Nome</label>
                        <input 
                            className="inputDefault" 
                            type="text" 
                            value={budget.name}
                            onChange={(e) => setBudget(prevState => ({...prevState, name: e.target.value}))}

                        />
                    </div>

                    <div className="client">
                        <label className="labelDefault">Client</label>
                        <input 
                            className="inputDefault" 
                            type="text" 
                            value={budget.client}
                            onChange={(e) => setBudget(prevState => ({...prevState, client: e.target.value}))}
                        />
                    </div>
                </div>

                <div className="desc">
                    <label className="labelDefault">Descrição das atividades</label>
                    <input 
                        className="inputDefault" 
                        type="text"
                        value={budget.description}
                        onChange={(e) => setBudget(prevState => ({...prevState, description: e.target.value}))}
                    />
                </div>

                <div className="utils">
                    <div className="utilItem">
                        <label className="labelDefault">Data Inicial</label>
                        <div className="dateItems">
                            <input 
                                type="text"  
                                className="inputDefault"
                                value={budget.startDate}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(prevState => ({...prevState, startDate: e.target.value}))}
                                ref={startDateRef}
                                onFocus={() => handleDate(startDateRef, 'start')}
                            />
                            {calendar.start && <span><FiCalendar size={14}/></span>}
                        </div>
                    </div>

                    <div className="utilItem">
                        <label className="labelDefault">Data Final</label>
                        <div className="dateItems">
                            <input 
                                type="text" 
                                className="inputDefault" 
                                value={budget.finalDate} 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(prevState => ({...prevState, finalDate: e.target.value}))}
                                ref={finalDateRef}
                                onFocus={() => handleDate(finalDateRef, 'final')}
                            />
                            {calendar.final && <span><FiCalendar size={14}/></span>}
                        </div>
                    </div>

                    <div className="utilItem">
                        <label className="labelDefault">Valor</label>
                        <input 
                            type="number" 
                            className="inputDefault" 
                            value={budget.value}
                            onChange={(e) => setBudget(prevState => ({...prevState, value: e.target.value}))}
                            
                        />
                    </div>
                    
                </div>

                <EditButton onClick={editBudget}>
                    Confirmar alterações
                </EditButton>

            </ModalOptions>
        </ModalCont>
    )
}