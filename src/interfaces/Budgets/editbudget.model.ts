import { SetStateAction } from "react";

export interface IEditBudget {
    handleModal: React.Dispatch<SetStateAction<boolean>>;
    budgetToEdit: any;
    renderList: any;
    setError: React.Dispatch<SetStateAction<boolean>>;
}