import styled from "styled-components";
import backgroud_home from 'assets/img/background-home.png';

export const ProtectedCont = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${backgroud_home});
    background-color: var(--bg-layout);
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;

`;

export const ProtectedItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 100vh;

    .item_text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
       
        p {
            font-family: "Poppins", sans-serif;
            font-size: 2rem;
            font-weight: 500;
            color: var(--text);

            span {
                color: var(--color-primary);
            }
        
        }
    }

    .item_img {
        width: 50%;
        img {
            width: 100%;
        }
    }

    //responsive

    @media screen and (max-width: 575.98px) {
        flex-direction: column-reverse;
        justify-content: center;

        .item_text {
            p {
                width: 300px;
                text-align: center;
                font-size: 1.2rem;
                
                span {
                    color: #6D00FD;
                }
            }
        }

        .item_img {
            display: flex;
            width: 80%;
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        flex-direction: column-reverse;
        justify-content: center;

        .item_text {
            p {
                width: 500px;
                text-align: center;
                font-size: 1.8rem;
                
                span {
                    color: #6D00FD;
                }
            }
        }

        .item_img {
            display: flex;
            width: 80%;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        flex-direction: column-reverse;
        justify-content: center;

        .item_text {
            p {
                width: 500px;
                text-align: center;
                font-size: 1.8rem;
            }
        }

        .item_img {
            display: flex;
            width: 80%;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        .item_text {
            p {
                font-size: 1.8rem;
            }
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        .item_text {
            p {
                font-size: 1.8rem;
            }
        }
    }

`;

export const Button = styled.button`
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #fff;
    width: 320px;
    height: 50px;
    margin-top: 15px;
    background: linear-gradient(90deg, #CC81FF 0%, #A25CFF 100%);
    border-radius: 8px;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: all .3s;

    :hover {
        background: linear-gradient(90deg, #AF53EE 0%, #8A35FB 100%);
    }

    //responsive
    @media screen and (max-width: 575.98px) {
        width: 280px;
        font-size: 1rem;
    } 

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        width: 280px;
        font-size: 1rem;
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        width: 280px;
        font-size: 1rem;
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 300px;
        font-size: 1rem;
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        width: 300px;
        font-size: 1rem;
    }
`;