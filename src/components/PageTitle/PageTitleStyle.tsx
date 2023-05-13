import styled from "styled-components";

export const TitleCont = styled.div`
    display: flex;
    align-items: center;
    padding: 40px;
    width: 100%;

    .iconPage {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 68px;
        height: 68px;
        border-radius: 16px;
        background: linear-gradient(270deg, #A15BFF 0%, #CE83FF 100%);
        box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;

        span {
            display: flex;
            font-size: 2rem;
            color: #fff;
        }
    }

    .title {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-left: 18px;
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 500;
    }

    //Responsive
    @media screen and (max-width: 575.98px) {
        padding: 28px;

        .iconPage {
            width: 60px;
            height: 60px;

            span {
                font-size: 1.6rem;
            }
        }

        .title {
            font-size: 1.4rem;
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        padding: 28px 40px;
        .iconPage {
            width: 60px;
            height: 60px;

            span {
                font-size: 1.6rem;
            }
        }

        .title {
            font-size: 1.6rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px){
        .iconPage {
            width: 60px;
            height: 60px;

            span {
                font-size: 1.675rem;
            }
        }

        .title {
            font-size: 1.675rem;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        .iconPage {
            width: 60px;
            height: 60px;

            span {
                font-size: 1.675rem;
            }
        }

        .title {
            font-size: 1.675rem;
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        .iconPage {
            width: 60px;
            height: 60px;

            span {
                font-size: 1.8rem;
            }
        }

        .title {
            font-size: 1.8rem;
        }
    }

`;