import styled from "styled-components";

export const ContLayout = styled.section`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: minmax(370px, 1fr) 5fr;
    background-color: var(--bg-layout);

    .content {
        width: 100%;
    }

    @media screen and (max-width: 575.98px)  {
        .content {
            position: absolute;
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        .content {
            position: absolute;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        .content {
            position: absolute;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        grid-template-columns: minmax(280px, 1fr) 4fr;
    }

    @media screen and (min-width: 1200px) and (max-width: 1399px) { 
        grid-template-columns: minmax(300px, 1fr) 4fr;
    }

`;