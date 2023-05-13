import styled from "styled-components";

export const UserModalCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 999;
    backdrop-filter: blur(2px);
    
`;

export const ModalOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 650px;
    height: 620px;
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

    //infos user
    .modalInfos {
        margin-top: 20px;

        .userAvatar {
            display: flex;
            align-items: center;
            position: relative;

            .addImg {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 68px;
                height: 68px;
                border-radius: 50%;
                background-color: grey;

                input[type="file"] {
                    display: none;
                }

                label {
                    cursor: pointer;
                    z-index: 999;
                }

                .editIcon {
                    font-size: 1.5rem;
                    color: #fff;
                    transition: all .2s;

                    :hover {
                        color: var(--color-secondary);
                    }
                }

                .imgProfile {
                    width: 68px;
                    height: 68px;
                    border-radius: 50%;
                    position: absolute;
                    z-index: 0;
                }

            }

            .avatarText {
                font-family: "Poppins", sans-serif;
                font-size: .9rem;
                font-weight: 400;
                color: var(--text-grey);
                padding-left: 18px;
                cursor: pointer;
                transition: all .2s;

                :hover {
                    color: var(--text-color);
                }
            }

            .loading {
                color: red;
                position: absolute;
                left: 300px;
                width: 88px;

            }


        }

        .nameUser {
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            margin-top: 8px;
            color: var(--text-color);
        }

       
    }

    //edit user
    .editName {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 48px;

        label {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            color: var(--text-color);
            font-weight: 500;
        }

        input {
            width: 280px;
            height: 44px;
            border-radius: 8px;
            outline: none;
            border: unset;
            border-radius: 4px;
            padding: 0px 20px;
            font-family: 'Poppins', sans-serif;
            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            position: relative;

            :focus {
                outline: 2px solid;
                outline-color: rgb(84 105 212 / 0.5);
            }
        }


    }

    //edit password
    .editPassword {
        display: flex;
        flex-direction: column;
        margin-top: 48px;
        width: 100%;


        .passwordLabel {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            color: var(--text-color);
            font-weight: 500;
            margin-bottom: 5px;
        }

        .passwordInputs {
            display: flex;
            justify-content: space-between;
            height: 100px;
            width: 100%;
            
            label {
                font-family: "Poppins", sans-serif;
                font-size: .9rem;
                font-weight: 400;
                color: var(--text-grey);
            }

            input {
                width: 280px;
                height: 44px;
                border-radius: 8px;
                outline: none;
                border: unset;
                border-radius: 4px;
                padding: 0px 20px;
                font-family: 'Poppins', sans-serif;
                box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px;
                position: relative;
                margin: 8px 0px;

                :focus {
                    outline: 2px solid;
                    outline-color: rgb(84 105 212 / 0.5);
                }
            }

            .current {
                .currentLabel {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    width: 100%;

                    span {
                        padding-right: 10px;
                        width: 160px;
                        height: 16px;
                        background-color: var(--error-color);
                        color: #fff;
                        border: 1px solid red;
                        right: 0;
                        position: absolute;
                        font-size: .75rem;
                        text-align: center;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
                        border-radius: 4px;
                        transition: all .3s;

                        ::after {
                            content: '';
                            background-color: transparent;
                            position: absolute;
                            bottom: -18px;
                            right: 0;
                            width: 2px;
                            height: 10px;
                            border-left: 8px solid transparent;
                            border-right: 8px solid transparent;
                            border-top: 8px solid var(--error-color);
                        }

                        @media screen and (max-width: 575.98px) {
                            width: 150px;
                            font-size: .55rem;
                        }
                        
                    }

                }
            }

            .newPassword {
                display: flex;
                flex-direction: column;
            }

        }
    }

    //response
    .response {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        margin-bottom: 10px;

        p {
            display: flex;
            align-items: center;
            font-family: "Poppins", sans-serif;
            color: #3CD8BF;

            .responseIcon {
                margin-right: 8px;
            }
        }
    }

    //responsive 
    @media screen and (max-width: 575.98px) {
        width: 90%;
        height: 98vh;

        //modalHeader
        .modalHeader {
            h4 {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;
            }
        }

        //edit user
        .editName {
            flex-direction: column;
            align-items: flex-start;
            margin-top: 28px;

            label {
                font-size: .9rem;
                margin-bottom: 5px;
            }

            input {
                width: 100%;
                height: 40px;
            }
        }

        .editPassword {
            margin-top: 28px;

            .passwordLabel {
                font-size: 1rem;
            }

            .passwordInputs {
                flex-direction: column;
                height: 100%;
                input {
                    width: 100%;
                    height: 40px;
                    padding-right: 2px;
                }
            }
        }

        .response {
            font-size: .9rem;
        }

        .modalInfos {
            .userAvatar {
                .loading {
                    display: none;
                }
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        width: 90%;
        height: 680px;

        //modalHeader
        .modalHeader {
            h4 {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;
            }
        }

        //edit user
        .editName {
            flex-direction: column;
            align-items: flex-start;
            margin-top: 28px;

            label {
                font-size: .9rem;
                margin-bottom: 5px;
            }

            input {
                width: 100%;
                height: 40px;
            }
        }

        .editPassword {
            margin-top: 28px;

            .passwordLabel {
                font-size: 1rem;
            }

            .passwordInputs {
                flex-direction: column;
                height: 100%;
                input {
                    width: 100%;
                    height: 40px;
                    padding-right: 2px;
                }
            }
        }

        .response {
            font-size: .9rem;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 620px;
        height: 580px;

        //edit user
        .editName {
            margin-top: 28px;

            label {
                font-size: 1rem;
            }

            input {
                height: 40px;
            }
        }

        .editPassword {
            margin-top: 28px;

            .passwordLabel {
                font-size: 1rem;
            }

            .passwordInputs {
                input {
                    width: 278px;
                    height: 40px;
                    padding-right: 2px;
                }
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