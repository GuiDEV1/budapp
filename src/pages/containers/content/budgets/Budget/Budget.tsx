import { IBudgetRender } from "interfaces/Budgets/budget.model";
import { formatDate } from "../utilsBudgets";
import { BudgetCont } from "./BudgetStyle"

export const Budget = ({name, client, desc, startDate, finalDate, value, modalEdit, deleteBudget}: IBudgetRender) => {

    const formatStartDate = formatDate(startDate.toString());
    const formatFinalDate = formatDate(finalDate.toString());


   
    return (
        <BudgetCont>

            <div className="budgetHeader">
                <div className="budgetsName">
                    <input className="inputDefault" type="text" value={name} readOnly/>
                </div>

                <div className="budgetsClient">
                    <input className="inputDefault" type="text" value={client} readOnly/>
                </div>
            </div>

            <div className="budgets">

                <div className="desc">
                    <div>
                        <p>{desc}</p>
                    </div>
                </div>

                <div className="budgetsFooter">
                    <div className="dates">
                        <span className="inputDefault">{formatStartDate}</span>
                        <span className="inputDefault">{formatFinalDate}</span>
                        <span className="inputDefault">R$ {value}</span>
                    </div>

                    <div className="btns">
                        <button className="buttonDefault edit" onClick={() => modalEdit(name, client, desc, startDate, finalDate, value)}>Editar</button>
                        <button className="buttonDefault delete" onClick={() => deleteBudget(name)}>Excluir</button>
                    </div>

                </div>


            </div>


        </BudgetCont>
    )


}