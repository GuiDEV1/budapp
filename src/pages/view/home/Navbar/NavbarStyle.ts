import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90px;
    position: absolute;
    
    
    .navbar {
        display: flex;
        justify-content: space-between;
        width: 1340px;
        align-items: center;
        
        .logo {
            font-size: 1.8rem;
            font-weight: 500;
            color: #000;
            cursor: pointer;

            span {
                color: var(--color-secondary);
            }
        }

        ul{
            display: inline-flex;

            li {
                
                list-style: none;
                cursor: pointer;

                a {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.2rem;
                    color: var(--text);
                    font-weight: 500;
                    padding: 0 15px;
                    transition: all .3s;
                    position: relative;

                   :hover {
                    color: var(--color-secondary);
                   }
                }
            }
        }

        .login {
            color: #f9f9f9;
            transition: all .3s;

            :hover {
                color: #000;
            }

            margin-left: 10px;
        }

        .register {
            display: flex;
            align-items: center;
            color: #f9f9f9;
            transition: all .3s;

            :hover {
                color: #000;
            }

            .plus_Icon {
                margin-right: 5px;
            }
        
        }

        .menuMobile {
            display: none;
        }

        //Responsive
        @media screen and (max-width: 575.98px) {
            width: 95%;

            .menuMobile {
                display: block;
                background: transparent;
                border: none;
        
                .btn_menu {
                    font-size: 2rem;
                    color: #fff;
                }
            }

            ul {
                position: fixed;
                flex-direction: column;
                height: 100vh;
                width: 100%;
                padding: 40px;
                z-index: 999;
                right: -100%;
                background-color: var(--color-primary);
                top: 90px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                transition: all .3s;

                li {
                    padding: 20px 0;
                    
                    a{
                        color: #fff;
                    }
                }
            }

            .open {
                right: 0%;
            }

            .login {
                margin-left: 2px;

            }
        }

        @media screen and (min-width: 576px) and (max-width: 767.98px)  {
            width: 95%;

            .menuMobile {
                display: block;
                background: transparent;
                border: none;
        
                .btn_menu {
                    font-size: 2rem;
                    color: #fff;
                }
            }

            ul {
                position: fixed;
                flex-direction: column;
                height: 100vh;
                width: 50%;
                padding: 40px;
                z-index: 999;
                right: -100%;
                background-color: var(--color-primary);
                top: 90px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                transition: all .3s;

                li {
                    padding: 20px 0;
                    
                    a{
                        color: #fff;
                    }
                }
            }

            .open {
                right: 0%;
            }

            .login {
                margin-left: 2px;

            }
        }

        @media screen and (min-width: 768px) and (max-width: 991.98px) {
            width: 95%;

            .menuMobile {
                display: block;
                background: transparent;
                border: none;
        
                .btn_menu {
                    font-size: 2rem;
                    color: #fff;
                }
            }

            ul {
                position: fixed;
                flex-direction: column;
                height: 100vh;
                width: 50%;
                padding: 40px;
                z-index: 999;
                right: -100%;
                background-color: var(--color-primary);
                top: 90px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                transition: all .3s;

                li {
                    padding: 20px 0;
                    
                    a{
                        color: #fff;
                    }
                }
            }

            .open {
                right: 0%;
            }

            .login {
                margin-left: 2px;

            }
        }

        @media screen and (min-width: 992px) and (max-width: 1199.98px) {
            width: 95%;
        }

        @media screen and (min-width: 1200px) and (max-width: 1400px) {
            width: 95%;
        }
    }

   

`;