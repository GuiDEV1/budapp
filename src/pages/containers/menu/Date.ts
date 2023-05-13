
export const newDate = new Date();

export enum Month {
    Janeiro,
    Fevereiro,
    Março,
    Abril,
    Maio,
    Junho,
    Julho,
    Agosto,
    Setembro,
    Outubro,
    Novembro,
    Dezembro
}

export const monthN = Month[newDate.getMonth()];
export const year = newDate.getFullYear();






