export interface IProduct {
    name: string;
    min: number;
    max: number;
    current: number;
    idUser?: number;
}

export interface IProductEdit {
    name: string;
    idUser: number;
    newName: string;
    newMin: number;
    newMax: number;
    newCurrent: number;
}