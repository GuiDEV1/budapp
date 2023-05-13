import { DeleteCont, DeleteOptions } from "./ModalDeleteStyle"

import { deleteBudgetAPI } from "apis/Budgets/budgets-api"

import { IDeleteBudget } from "interfaces/Budgets/deletebudget.model"


export const ModalDelete = ({closeModal, budgetToDelete, allBudgets}: IDeleteBudget) => {

    async function Delete() {
        try {
            const deleteBudget = await fetch(deleteBudgetAPI, {
                method: 'POST',
                headers: {"Content-Type": "application/json; charset=UTF-8"},
                body: JSON.stringify(budgetToDelete)
            })
            .then(resp => resp.json())
            .then(data => {
                if(data.erro === false) {
                    closeModal(false);
                    handleBudgets();
                }
                return data;
               
            })

            return deleteBudget;

        } catch (error) {
            return null;
            
        } 
        
    }

    const handleBudgets = () => {
        let indexBudget;

        allBudgets.map((item: any) => {
            if(item.name === budgetToDelete.name) {
                indexBudget = allBudgets.indexOf(item);
            }
        })

        allBudgets.splice(indexBudget, 1);
    }
 

    return (
        <DeleteCont>
            <DeleteOptions>
                <div className="deleteHeader">
                    <h4>O produto será deletado, deseja continuar ?</h4>
                </div>

                <div className="btnsDelete">
                    <button className="confirm" onClick={Delete}>Confirmar</button>

                    <button className="cancel" onClick={() => closeModal(false)}>Cancelar</button>
                </div>
            </DeleteOptions>
            
        </DeleteCont>
    )
}