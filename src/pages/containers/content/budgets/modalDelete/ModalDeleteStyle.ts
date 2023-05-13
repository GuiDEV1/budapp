import styled from "styled-components";

export const DeleteCont = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 95%;
    height: 100%;
    z-index: 999;
    position: absolute;
    backdrop-filter: blur(1px);

`;

export const DeleteOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 30%;
    padding: 28px 28px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 9999;

    //header modal
    .deleteHeader {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;

            h4 {
                font-family: "Poppins", sans-serif;
                font-size: 1.2rem;
                font-weight: 500;
                margin-bottom: 2px;
                text-align: center;
            }

  
    }

    .btnsDelete {
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin-top: 20px;


            .confirm {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 48%;
                height: 48px;

                font-family: 'Poppins', sans-serif;
                font-size: 1.1rem;
                font-weight: 500;
                color: #fff;

                border: none;
                border-radius: 8px;
                background: linear-gradient(270.01deg, #3CD8BF 12.82%, #7DD9D0 99.99%);
                box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
                cursor: pointer;

                transition: all .2s;
                
                :hover {
                    transform: scale(1.02);
                }
            }

            .cancel {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 48%;
                height: 48px;

                font-family: 'Poppins', sans-serif;
                font-size: 1.1rem;
                font-weight: 500;
                color: #fff;

                border: none;
                border-radius: 8px;
                background: radial-gradient(100% 559.5% at 100% 50%, #FF5271 0%, #FF5E5E 100%);
                box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
                cursor: pointer;

                transition: all .2s;
                
                :hover {
                    transform: scale(1.02);
                }

            }
    }

    //Responsive 
    @media screen and (max-width: 575.98px) {
        width: 100%;
        height: 38%;
        justify-content: space-around;
        margin-right: 48px;

       
        .deleteHeader {
            h4 {
                font-size: .9rem;
            }
        }

        .btnsDelete {
            flex-direction: column;
            .confirm, .cancel {
                width: 100%;
                margin: 4px 0px;
                font-size: .9rem;
                height: 44px;
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        width: 60%;
        justify-content: space-around;
       
        .deleteHeader {
            h4 {
                font-size: 1rem;
            }
        }

        .btnsDelete {
            .confirm, .cancel {
                font-size: .9rem;
                height: 44px;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        width: 60%;
        justify-content: space-around;
       
        .deleteHeader {
            h4 {
                font-size: 1.2rem;
            }
        }

        .btnsDelete {
            .confirm, .cancel {
                font-size: 1rem;
                height: 44px;
            }
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 60%;
        height: 44%;
        justify-content: space-around;

        .deleteHeader {
            h4 {
                font-size: 1.1rem;
            }
        }

        .btnsDelete {
            .confirm, .cancel {
                font-size: 1rem;
                height: 44px;
            }
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        .deleteHeader {
            h4 {
                font-size: 1.1rem;
            }
        }
    }


`;

export const EditButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 8px;

    font-family: 'Poppins', sans-serif;
    font-size: .9rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #fff;
           
    background: linear-gradient(90deg, #CC81FF 0%, #A25CFF 100%);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: all .3s;
    outline: none;

    :hover {
        background: linear-gradient(90deg, #AF53EE 0%, #8A35FB 100%);
    }

`;
