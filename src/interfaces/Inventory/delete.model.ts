export interface IDelete {
    openModal: React.Dispatch<React.SetStateAction<boolean>>;
    productToDelete: {name: string; idUser: string;};
    allProducts?: any;
}

export interface IEdit {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
    productToEdit: any;
    allProducts: any;
}