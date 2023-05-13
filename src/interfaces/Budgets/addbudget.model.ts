import { SetStateAction } from "react";

export interface IAddBudgets {
    closeAddBudget: React.Dispatch<SetStateAction<boolean>>;
    setAllBudgets: React.Dispatch<SetStateAction<object[]>>;
    setError: React.Dispatch<SetStateAction<boolean>>;
}