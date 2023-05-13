import styled from "styled-components";

export const Menu = styled.nav<{active: boolean}>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    padding: 28px 28px;
    position: relative;
    transition: all ease .2s;


    ul li {
        display: flex;
        align-items: center;
        list-style: none;
        cursor: pointer;
        transition: all .2s;
        margin: 8px 0px;
        border-radius: 12px;

        :hover {
            color: var(--color-secondary);
        }
        
        p {
            display: flex;
            align-items: center;
            padding: 12px 10px;
            list-style: none;
            cursor: pointer;
            transition: all .2s;

            font-family: "Poppins", sans-serif;
            font-size: 1.1rem;
            width: 100%;

        }

        .listItem {
            display: flex;
            align-items: center;
            width: 100%;
            padding-left: 12px;

            .iconList {
                font-size: .9rem;
            }
        }
    }

    .selected {
        color: #fff;
        background: linear-gradient(270deg, #A15BFF 0%, #CE83FF 100%);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


        :hover {
            color: #fff;
        }

        .iconList {
            color: #fff !important;
        }
    }

    //Responsive
    @media screen and (max-width: 575.98px) {
        position: absolute;
        width: 120px;
        z-index: 9999;
        left: ${props => props.active != true ? '-105px' : '0px'};
        padding: 18px 18px;
        box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;

        ul li {
            border-radius: 16px;
        }

        ul li p {
            display: none;
            
        }

        .listItem {
            justify-content: center;
            padding: 12px;

            span {
                font-size: 28px;

                .iconList {
                    color: #D9D9D9;
                    font-size: 22px !important;
                }
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        position: absolute;
        width: 120px;
        z-index: 99;
        left: ${props => props.active != true ? '-105px' : '0px'};
        padding: 18px 18px;
        box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;

        ul li {
            border-radius: 16px;
        }

        ul li p {
            display: none;
            
        }

        .listItem {
            justify-content: center;
            padding: 12px;

            span {
                font-size: 28px;

                .iconList {
                    color: #D9D9D9;
                    font-size: 26px !important;
                }
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        position: absolute;
        width: 120px;
        z-index: 99;
        left: ${props => props.active != true ? '-105px' : '0px'};
        padding: 18px 18px;
        box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;

        ul li {
            border-radius: 16px;
        }

        ul li p {
            display: none;
            
        }

        .listItem {
            justify-content: center;
            padding: 12px;

            span {
                font-size: 28px;

                .iconList {
                    color: #D9D9D9;
                    font-size: 26px !important;
                }
            }
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        ul li p {
            font-size: .9rem;
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1399px) {
        ul li p {
            font-size: .94rem;
        }
    }

`;

export const HeaderMenu = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    

    h2 {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
    }

    //Responsive
    @media screen and (max-width: 575.98px) {
        display: none;
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        display: none;
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        display: none;
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        h2 {
            font-size: 1.4rem;
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1399px) {
        h2 {
            font-size: 1.4rem;
        }
    }

`;

export const UserOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    width: 100%;
    height: 80px;
    background-color: var(--bg-layout);
    border-radius: 8px;
    margin: 28px 0px;

    .userImg {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background-color: #fff;

        input[type="file"] {
            display: none;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 58px;
            height: 58px;
            border-radius: 50%;

            .userProfile {
                width: 58px;
                height: 58px;
                border-radius: 50%;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            }

            .userProfileIcon {
                font-size: 1.5rem;
                color: var(--text);
            }
        }
 
    }

    .userInfos {
        width: 72%;
        display: flex;
        flex-direction: column;
        padding-left: 5px;

        .nameUser {
            font-family: 'Poppins', sans-serif;
            font-size: 1.1rem;
            color: var(--text-grey);
            font-weight: 500;
        }

        .userFooter {
            display: flex;
            justify-content: space-between;

            p {
            font-family: 'Poppins', sans-serif;
            font-size: .8rem;
            color: var(--text-grey);
            font-weight: 500;
            }

            .btnConfig {
                font-size: 1rem;
                cursor: pointer;
                transition: all ease .2s;

                :hover {
                    color: var(--color-secondary);
                }
            }

        }

        

    }

    //responsive
    @media screen and (max-width: 575.98px) {
       flex-direction: column;
       justify-content: space-around;
       align-items: center;
       padding: 12px 12px;
       height: 120px;

        .userInfos {
            width: 100%;
            text-align: center;
            padding: 0px 0px;

            .nameUser {
                font-size: .8rem;
            }
            .userFooter {
                display: none;
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
       flex-direction: column;
       justify-content: space-around;
       align-items: center;
       padding: 12px 12px;
       height: 120px;

        .userInfos {
            width: 100%;
            text-align: center;
            padding: 0px 0px;

            .nameUser {
                font-size: .8rem;
            }
            .userFooter {
                display: none;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
       flex-direction: column;
       justify-content: space-around;
       align-items: center;
       padding: 12px 12px;
       height: 120px;

       .userInfos {
        width: 100%;
        text-align: center;
        padding: 0px 0px;

        .nameUser {
            font-size: .8rem;
        }
        .userFooter {
            display: none;
        }
       }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        margin: 20px 0px;

        .userImg {
            width: 48px;
            height: 48px;
        }

        .userInfos {
            .nameUser {
                font-size: 1rem;
            }
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1399px) {
        .userImg {
            width: 48px;
            height: 48px;
        }

        .userInfos {
            .nameUser {
                font-size: 1rem;
            }
        }
    }

    

`;

export const BtnLogout = styled.div`
    display: flex;
    align-items: flex-end;
    border: none;
    background: transparent;
    height: 50%;
    color: var(--text);
    padding-left: 12px;

    .logout {
        display: flex;
        align-items: center;
        cursor: pointer;

        .iconLogout {
            font-size: 18px;
            transition: all .2s;
        }

        p {
            font-family: "Poppins", sans-serif;
            font-size: 1.1rem;
            margin-left: 10px;

        }
    }

    .btnConfigResponsive {
        display: none;
    }

    //Responsive
    @media screen and (max-width: 575.98px) {
        flex-direction: column-reverse;
        align-items: center;
        padding: 0;
        

        p {
            display: none;
        }

        .iconLogout {
            font-size: 22px;
        }

        .btnConfigResponsive {
            display: block;
            font-size: 18px;
            margin-bottom: 18px;
        }
    } 

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        flex-direction: column-reverse;
        align-items: center;
        padding: 0;


        p {
            display: none;
        }

        .iconLogout {
            font-size: 28px; 
        }

        .btnConfigResponsive {
            display: block;
            font-size: 24px;
            margin-bottom: 18px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        flex-direction: column-reverse;
        align-items: center;
        padding: 0;

        p {
            display: none;
        }

        .iconLogout {
            font-size: 28px;
        }

        .btnConfigResponsive {
            display: block;
            font-size: 24px;
            margin-bottom: 18px;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        bottom: 40px;
        p {
            font-size: .9rem;
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1399px) {
       p {
        font-size: 1rem;
       }
    }

`;

export const BtnMenuMobile = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    top: 50%;
    right: -16px;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
    transition: all ease .2s;


    .iconMenu {
        color: var(--color-secondary);
        font-size: 1.2rem;
    }

    //Responsive
    @media screen and (max-width: 575.98px) {
        display: flex;
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        display: flex;
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px)  {
        display: flex;
    }

`;