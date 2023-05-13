import styled from "styled-components";

export const ModalCont = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 95%;
    height: 100%;
    z-index: 999;
    position: absolute;
    backdrop-filter: blur(1px);
`;

export const ModalOptions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    height: 80%;
    padding: 28px 28px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 9999;

       //header modal
       .modalHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;

            h4 {
                font-family: "Poppins", sans-serif;
                font-size: 1.2rem;
                font-weight: 600;
                margin-bottom: 2px;
            }

            p {
                font-family: "Poppins", sans-serif;
                font-size: .9rem;
                font-weight: 500;
                color: var(--text-grey);
            }

            .exitIcon {
                font-size: 2rem;
                cursor: pointer;
                transition: all .2s;

                :hover {
                    color: var(--color-secondary);
                }
            }
        }

        //names 
        .names {
            display: flex;
            width: 100%;
            justify-content: space-between;

            .name, .client {
                width: 50%;

                input {
                    outline: 1px solid;
                    outline-color: rgb(84 105 212 / 0.5);
                }
            }

            .name {
                padding-right: 8px;
            }

            .client {
                padding-left: 8px;
            }
        }

        //desc 
        .desc {
            display: flex;
            flex-direction: column;
            width: 100%;

            input {
                height: 80px;
                outline: 1px solid;
                outline-color: rgb(84 105 212 / 0.5);
            }
            
        }

        //utils 
        .utils {
            display: flex;
            width: 100%;
            justify-content: space-between;

            .utilItem {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 32%;

                input {
                    outline: 1px solid;
                    outline-color: rgb(84 105 212 / 0.5);
                    ::placeholder {
                        display: none;
                    }
                }

                .dateItems {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    font-family: 'Poppins', sans-serif;
                    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
                    outline: 1px solid;
                    outline-color: rgb(84 105 212 / 0.5);
                    border-radius: 8px;
                    padding: 0px 20px;
                    position: relative;

                    input {
                        padding: 0px;
                        width: 100%;
                        height: 48px;
                        border-radius: 8px;
                        outline: none;
                        border: none;
                        position: relative;
                
                    }

                    span {
                        position: absolute;
                        right: 20px;
                        bottom: 10px;
                    }
                }
            }
        }


    //Responsive 
    @media screen and (max-width: 575.98px) {
        width: 90%;
        height: 100%;
        margin-right: 48px;

        .modalHeader {
            h4 {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;
            }
        }

        label {
        font-size: .8rem;
       }

       .utils {
        flex-direction: column;
        .utilItem {
            width: 100%;
            margin-bottom: 4px;
        }
       }
     

    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        width: 80%;
        height: 100%;
        margin-right: 48px;

        .modalHeader {
            h4 {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;
            }
        }

        label {
        font-size: 1rem;
       }
     

    
       
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        width: 70%;
        height: 100%;
        margin-right: 48px;

        label {
        font-size: 1rem;
       }

    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 70%;
        height: 100%;
        padding: 20px 20px;

        .modalHeader {
            h4 {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;
            }
        }

    
       label {
        font-size: 1rem;
       }

     
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        width: 60%;
        height: 100%;

       label {
        font-size: 1rem;
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
