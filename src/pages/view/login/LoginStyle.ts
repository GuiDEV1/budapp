import styled from "styled-components";
import backgroud_home from 'assets/img/background-home.png';

export const LoginContaier = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: url(${backgroud_home});
    background-color: var(--bg-layout);
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;

`;

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 80vh;
`;

export const ItemImg = styled.div`
    display: flex;
    justify-content: center;
    width: 68%;
    height: 100%;
    background-color: #fff;

    img {
        width: 60%;
        height: inherit
        
    }

    @media screen and (max-width: 575.98px) {
        display: none;
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        display: none;
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px)  {
        display: none;
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 55%;
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        width: 62%;
    }

`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 32%;
    height: 100%;
    background: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .login_text {
        width: 100%;
        padding: 0px  40px;
        h2 {
            font-family: "Poppins", sans-serif;
            font-size: 2rem;
            font-weight: 600;
        }

        p {
            color: #A9A9A9;
            font-size: 1.2rem;

            span {
                color: var(--color-secondary);
                cursor: pointer;
            }
        }

         // responsive
         @media screen and (max-width: 575.98px) {
             h2 {
                font-size: 1.6rem;
             }
             p {
                font-size: 1rem;
            }
        }

        @media screen and (min-width: 992px) and (max-width: 1199.98px) {
            h2 {
                font-size: 1.8rem;
            }

            p {
                font-size: 1rem;
            }
        }   
        
        @media screen and (min-width: 1200px) and (max-width: 1400px) {
            h2 {
                font-size: 1.8rem;
            }

            p {
                font-size: 1.1rem;
            }
        }
    }

    .formItems {
        width: 100%;
        padding: 0px  40px;
        height: 70%;

        .input {
            display: flex;
            flex-direction: column;
            position: relative;

            label {
                font-family: 'Poppins', sans-serif;
                font-size: 1rem;
                font-weight: 500;
                margin-top: 20px;
            }

            input {
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

            .resetPassword {
                text-align: right;
                padding-top: 10px;
                color: var(--color-secondary);
                cursor: pointer;

                :hover {
                    text-decoration: underline;
                }
            }
            
        }

        button {
            text-transform: uppercase;
            font-size: 1.1rem;
            font-weight: 500;
            letter-spacing: 1px;
            color: #fff;
            width: 100%;
            height: 50px;
            margin-top: 50px;
            background: linear-gradient(90deg, #CC81FF 0%, #A25CFF 100%);
            border-radius: 8px;
            border: none;
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            transition: all .3s;
            outline: none;

            :hover {
                background: linear-gradient(90deg, #AF53EE 0%, #8A35FB 100%);
            }

            @media screen and (max-width: 575.98px) {
                font-size: 1rem;
            }
        }

        .errorInput {
            width: 220px;
            height: 20px;
            background-color: var(--error-color);
            color: #fff;
            border: 1px solid red;
            top: 15px;
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


    // Responsive
    @media screen and (max-width: 575.98px) {
        width: 100%;
        height: 90vh;

        .login_text {
            padding: 20px 20px;
        }
        .formItems {
            padding:  40px 20px;
            height: 90%;
        }
       
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        width: 100%;
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        width: 100%;
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 45%;
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        width: 38%;
    }
`;