export interface IDeleteFinancial {
    openModal: React.Dispatch<React.SetStateAction<boolean>>;
    confirmDelete(): Promise<void>;
}