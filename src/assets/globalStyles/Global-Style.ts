import styled, {createGlobalStyle} from 'styled-components'

//fonts 
import { spaceGrotesk } from '../fonts/fonts';


const GlobalStyle: any = createGlobalStyle`
    @import url(${spaceGrotesk});
    

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    div, header, section, main {
        margin: 0;
    }

    html {
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    :root{
        --bg-white: #F9F9F9;
        --bg-layout: #F2EDF3;
        --color-primary: #A862FF;
        --color-secondary: #C97FFF;
        --text: rgba(0, 0, 0, 0.7);
        --lilas-default: #A55FFF;
        --blue-default: #399AE6;
        --green-default: #3CD8BF;
        --error-color: #FF5271;
        --text-grey: #5E5959;
        --success-color: #7DD9D0;
    }

    body {
        background-color: var(--bg-white);
        font-family: 'Roboto', sans-serif;

    }

    //classes
    .labelDefault {
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        font-weight: 500;
    }

    .inputDefault {
        width: 100%;
        height: 48px;
        border-radius: 8px;
        outline: none;
        border: none;
        padding: 0px 20px;
        font-family: 'Poppins', sans-serif;
        box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
        position: relative;

        :focus {
            outline: 1px solid;
            outline-color: rgb(84 105 212 / 0.5);
        }
    }

    .buttonDefault {
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 1px;
        color: #fff;
        width: 100%;
        height: 50px;
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


`;

export default GlobalStyle;