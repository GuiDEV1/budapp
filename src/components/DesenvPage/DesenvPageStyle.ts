import styled from "styled-components";


export const Desenv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: center;

    img {
        width: 50%;
        margin-bottom: 16px;
    }

    //Responsive 
    @media screen and (max-width: 575.98px) {
        img {
            width: 70%;
        }
        p {
            font-size: .8rem;
            text-align: center;
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        img {
            width: 70%;
        }
        p {
            font-size: .8rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        img {
            width: 70%;
        }
        p {
            font-size: .8rem;
        }
    }

  

`;