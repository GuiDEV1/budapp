import { setBudgetsAPI, getAllBudgetsAPI, updateBudgetAPI } from "apis/Budgets/budgets-api";
import { IBudget, IGetBudget } from "interfaces/Budgets/budget.model";

export async function SetBudget(budget: IBudget) {
    try {
        const addBudget = fetch(setBudgetsAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(budget)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return addBudget;
        
    } catch (error) {
        return null;
    }
}

export async function GetBudgetsAll(budgetObj: IGetBudget) {
    try {
        const requestBudgets = fetch(getAllBudgetsAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(budgetObj)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return requestBudgets;

    } catch (error) {
        return null;
        
    }
    
}

export async function updateBudget(budget: object) {
    try {
        const updateBudget = fetch(updateBudgetAPI, {
            method: 'POST',
            headers: {"Content-Type": "application/json; charset=UTF-8"},
            body: JSON.stringify(budget)
        })
        .then(resp => resp.json())
        .then(data => {
            return data;
        })

        return updateBudget
        
    } catch (error) {
        return null;
        
    }
}

export const formatDate = (date: string) => {
    const dateLetters = [...date];

    const year: string[] = [];
    const month: string[] = [];
    const day: string[] = [];

    for(let i = 0; i <= dateLetters.length; i++){
        if(i <= 3) {
            year.push(dateLetters[i]);
        }

        if(i > 3 && i <= 5) {
            month.push(dateLetters[i]);
        }

        if(i > 5) {
            day.push(dateLetters[i]);
        }
    }

    const dateFormat = `${day.toString().replaceAll(',', '')} / ${month.toString().replace(',', '')} / ${year.toString().replaceAll(',', '')}`;
    return dateFormat;

}