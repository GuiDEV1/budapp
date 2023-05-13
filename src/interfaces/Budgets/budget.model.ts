export interface IBudget {
    name: string;
    client: string;
    description: string;
    startDate: string;
    finalDate: string;
    value: string;
    idUser: string;
}

export interface IGetBudget {
    idUser: string
}

export interface IBudgetRender {
    name: string;
    client: string;
    desc: string;
    startDate: string;
    finalDate: string;
    value: string;
    modalEdit: any;
    deleteBudget: any;
}