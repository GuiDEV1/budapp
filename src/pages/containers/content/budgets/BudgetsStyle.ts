import styled from "styled-components";

export const BudgetsCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    padding: 0px 40px;
    position: relative;
`;


export const AddBudgetsButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 248px;
    height: 58px;
    padding: 0px 12px;
    margin-bottom: 28px;

     //Responsive 
     @media screen and (max-width: 575.98px) {
        width: 100%;
        padding: 0px 48px;
     }

`;


export const BudgetsItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-top: 3px solid #fff;
    margin-top: 0px;
    padding-right: 8px;

    overflow: auto;
    ::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--color-secondary);
        border-radius: 5px;
    }

    .itemsTitle {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 28px 0px 4px 0px;

        h3 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 4px;
        }

        .order {
            width: 148px;
            border: none;
            outline: none;
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            border-radius: 4px;
            padding: 4px;
 
        }
    }

    .budgetsItems {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        margin-top: 16px;
    }


`;