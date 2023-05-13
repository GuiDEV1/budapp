import styled from "styled-components";

export const Success = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 8px 10px 8px;
    z-index: 999;

    width: 400px;
    height: 70px;

    border-radius: 8px;

    position: absolute;
    z-index: 999;
    top: 20px;
    right: 40px;
    
    background-color: #3CD8BF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    transition: all .5s;


    .hideSuccess {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 62px;
        height: 90%;
        border-radius: 8px;
        background-color: var(--bg-layout);
        cursor: pointer;
    }

    .messageSuccess {
        width: 330px;
        height: inherit;
        
        p {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            height: inherit;
            width: 320px;
            padding-left: 10px;
            font-family: "Poppins", sans-serif;
            color: #fff;
            font-size: 1.1rem;
            word-wrap: break-word;
        }
    }

    ::before {
        content: '';
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: var(--success-color);
        left: 0;
        z-index: -10;
        border-radius: 8px;

    }

     // Responsive
     @media screen and (max-width: 575.98px) {
        width: 200px;
        .hideSuccess {
            width: 50px;
        }
        .messageSuccess {
            width: 140px;
            p {
                width: 140px;
                font-size: .8rem;
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        width: 360px;
        .hideSuccess {
            width: 55px;
        }
        .messageSuccess {
            width: 260px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        width: 380px;
        .hideSuccess {
            width: 58px;
        }
        .messageSuccess {
            width: 300px;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 360px;
        .hideSuccess {
            width: 55px;
        }
        .messageSuccess {
            width: 280px;
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        width: 380px;
        .hideSuccess {
            width: 58px;
        }
        .messageSuccess {
            width: 300px;
        }

    }
   
        
    
    
`;