import styled from "styled-components";
import backgroud_home from '../../../assets/img/background-home.png';

export const Header = styled.header`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroud_home});
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 200vh;

    @media screen and (max-width: 575.98px) {
        background-size: 80vh 100vh;
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        background-size: 128vh 100vh;
    }
`;

export const Intro = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 1270px;
    height: 100vh;


    .intro_text {
        width: 600px;
        h2 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 2.2rem;
            color: var(--text);
        }

        span {
            color: var(--color-secondary);
        }

        p {
            font-size: 1.2rem;
            margin: 5px 0;
        }

        button {
            text-transform: uppercase;
            font-size: 1.1rem;
            font-weight: 500;
            letter-spacing: 1px;
            color: #fff;
            width: 320px;
            height: 50px;
            margin-top: 15px;
            background-color: var(--color-secondary);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            transition: all .3s;

            :hover {
                background-color: var(--color-primary);
            }
        }
 
    }

    .dashvector {
        position: absolute;
        right: 100px;

        img {
            width: 800px;
        }
    }

    //Responsive

    @media screen and (max-width: 575.98px) {
        flex-direction: column;
        justify-content: center;
        width: 100%;

        .dashvector {
            position: relative;
            right: 0;
            top: 80px;

            img {
                width: 300px;
            }
        }

        .intro_text {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            width: 90%;
            top: 80px;
            
            h2 {
                font-size: 1.5rem;
                width: 90%;
                text-align: center;
            }

            p {
                font-size: .8rem;
                width: 90%;
                text-align: center;
            }

            span {
                color: #5016D2;
                text-shadow: 0px 1px 2px #5016D2;
            }

            button {
                width: 280px;
                font-size: .9rem;
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        flex-direction: column;
        justify-content: center;
        width: 100%;

        .dashvector {
            position: relative;
            right: 0;
            top: 80px;

            img {
                width: 500px;
            }
        }

        .intro_text {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            top: 80px;
            width: 95%;
            
            h2 {
                font-size: 2rem;
                width: 500px;
            }

            p {
                font-size: .8rem;
                width: 500px;
            }

            span {
                color: #5016D2;
                text-shadow: 0px 1px 2px #5016D2;
            }

            button {
                width: 300px;
                font-size: 1rem;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        flex-direction: column;
        justify-content: center;
        width: 100%;

        .dashvector {
            position: relative;
            right: 0;
            top: 80px;

            img {
                width: 500px;
            }
        }

        .intro_text {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            top: 80px;
            
            h2 {
                font-size: 2rem;
                width: 500px;
            }

            p {
                font-size: .8rem;
                width: 500px;
            }

            span {
                color: #5016D2;
                text-shadow: 0px 1px 2px #5016D2;
            }

            button {
                width: 300px;
                font-size: 1rem;
            }
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 95%;

        .dashvector {
            right: 5px;

            img {
                width: 600px;
            }
        }

        .intro_text {
            h2 {
                font-size: 2rem;
                width: 500px;
            }

            p {
                font-size: 1rem;
                width: 500px;
            }

            button {
                width: 300px;
                font-size: 1rem;
            }
         }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        width: 95%;

        .dashvector {
            right: 10px;

            img {
                width: 700px;
            }
        }
    }

`;

export const Next = styled.div` 
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 20px;

    .icon_next {
        font-size: 2rem;
        color: var(--color-secondary);
        cursor: pointer;    
        animation: nextAnime 1s infinite;
    }

    @keyframes nextAnime {
        0%, 100% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }
    }
`;

export const MainERP = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1170px;
    margin: 0 auto;
    height: 100vh;
    position: relative;

    .erp_title {
        font-size: 2.2rem;
        margin-bottom: 60px;
        color: var(--text);

        span {
            color: var(--color-primary);
        }

    }

    .cont_img {
        display: flex;
        flex-direction: column;
        width: 95%;

        img {
            width: 800px;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
        }

        p {
            font-size: 1.4rem;
            font-weight: 500;
            margin: 15px 0;
            max-width: 300px;
            color: var(--text);
        }
    }

    .dashimg {
        display: flex;
        align-items: flex-end;
        position: absolute;
        top: 380px; 
    }

    //Responsive 
    @media screen and (max-width: 575.98px){
        width: 90%;

        .erp_title {
            font-size: 1.2rem;
        }

        .cont_img {
            align-items: center;
            img {
                width: 320px;
            }

            p {
                font-size: .9rem;
                max-width: 300px;
            }
        }

        .dashimg {
            position: relative;
            align-items: center;
            flex-direction: column-reverse;
            top: 0;
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        width: 576px;

        .erp_title {
            font-size: 1.5rem;
        }

        .cont_img {
            img {
                width: 420px;
            }

            p {
                font-size: .9rem;
                max-width: 100px;
            }
        }

        .dashimg {
            top: 40%; 
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        width: 768px;

        .erp_title {
            font-size: 1.8rem;
        }

        .cont_img {
            img {
                width: 520px;
            }

            p {
                font-size: 1rem;
                max-width: 200px; 
            }
        }

        .dashimg {
            top: 40%; 
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 992px;

        .erp_title {
            font-size: 2rem;
        }

        .cont_img {
            img {
                width: 620px;
            }
        }

        .dashimg {
            top: 40%;  
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
       width: 1170px;
    }

`;

export const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 1270px;
    height: 100%;
    margin: 0 auto;
    padding: 228px 0;

    h2 {
        font-family: "Poppins", sans-serif;
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 60px;
        color: var(--text);
        text-align: center;
        width: 100%;

        span {
            color: var(--color-primary);
        }
    }

    .advantage {
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 200px;
        margin: 12px 10px;
        background-color: #fff;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 28px;
        border-radius: 8px;

        .advantage_title {
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            p {
                font-size: 2rem;
                margin-left: 10px;
            }

            .advantage_icon {
                font-size: 3rem;
            }

            .lilas {
                color: var(--lilas-default);
            }

            .blue {
                color: var(--blue-default);
            }

            .green {
                color: var(--green-default);
            }
        }
    }

    //Responsive
    @media screen and (max-width: 575.98px){
        width: 90%;
        padding: 28px 0;

        h2 {
            font-size: 1.2rem;
            max-width: 200px;
        }

        .advantage {
            .advantage_title {
                p {
                font-size: 1.2rem;
                }

                .advantage_icon {
                font-size: 2rem;
                }
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        width: 576px;
        padding: 28px 0;

        h2 {
            font-size: 1.5rem;
        }

        .advantage {
            .advantage_title {
                p {
                font-size: 1.4rem;
                }

                .advantage_icon {
                font-size: 2.2rem;
                }
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        width: 768px;
        padding: 28px 0;

        h2 {
            font-size: 1.8rem;
        }

        .advantage {
            .advantage_title {
                p {
                font-size: 1.6rem;
                }

                .advantage_icon {
                font-size: 2.4rem;
                }
            }
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 992px;

        h2 {
            font-size: 2rem;
        }

        .advantage {
            .advantage_title {
                p {
                font-size: 1.8rem;
                }

                .advantage_icon {
                font-size: 2.6rem;
                }
            }
        } 
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        width: 1200px;
    }

`;