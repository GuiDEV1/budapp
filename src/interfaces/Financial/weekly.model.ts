export interface IWeekly {
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    value: any;
    modalDelete(del: string): void;
    getNewValue(): Promise<void>;
}