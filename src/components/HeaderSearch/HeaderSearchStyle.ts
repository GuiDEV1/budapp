import styled from "styled-components";

export const HeaderCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 40px;
    width: 100%;
    height: 68px;
    background-color: #fff;

    .inputSearch {
        display: flex;
        justify-content: space-between;
        width: 400px;
        height: 60%;
        border-radius: 8px;
        background-color: var(--bg-layout);

        input {
            width: 348px;
            padding-left: 20px;
            border: none;
            background: transparent;
            outline: none;
        }

        button {
            width: 48px;
            background: linear-gradient(270deg, #A15BFF 0%, #CE83FF 100%);
            border: none;
            border-radius: 0px 8px 8px 0px;
            cursor: pointer;

            .searchIcon {
                font-size: 1rem;
                color: #fff;
            }
        }
    }

    //Responsive
    @media screen and (max-width: 575.98px) {
        justify-content: center;

        .inputSearch {
            width: 328px;

            input {
                width: 280px;
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        .inputSearch {
            width: 380px;

            input {
                width: 326px;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px){
        .inputSearch {
            width: 380px;

            input {
                width: 326px;
            }
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        .inputSearch {
            width: 380px;

            input {
                width: 326px;
            }
        }
    }



`;