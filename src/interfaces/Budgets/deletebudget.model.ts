import { SetStateAction } from "react";

export interface IDeleteBudget {
    closeModal: React.Dispatch<SetStateAction<boolean>>;
    budgetToDelete: {name: string, idUser: string};
    allBudgets: any;


}