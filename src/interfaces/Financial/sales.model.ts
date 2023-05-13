export interface ISaleItem {
    sale: number;
    id: number;
    reload(): void;
}

export interface ISale {
    reload(): void;
}