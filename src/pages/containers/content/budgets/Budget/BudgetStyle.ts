import styled from "styled-components";

export const BudgetCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 28px;

    .budgetHeader {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .budgetsName, .budgetsClient {
            width: 50%;

            input {
                cursor: default;
            }
        }

        .budgetsName {
            padding-right: 8px;
        }

        .budgetsClient {
            padding-left: 8px;
        }
        
    }

    .budgets {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 16px;
        

        .desc {
            width: 50%;
            min-height: 128px;
            max-height: 128px;
            max-width: 100%;
            padding-right: 8px;
            
            div {
                border-radius: 8px;
                min-height: 128px;
                max-height: 128px;
                min-width: 100%;
                max-width: 100%;
                background-color: #fff;
                box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

                p {
                    padding: 20px;
                    font-family: 'Poppins', sans-serif;
                    color: var(--text);
                    font-size: .9rem;
                }
            }
        
        }

        .budgetsFooter {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 50%;
            padding-left: 8px;

            .dates {
                display: flex;
                justify-content: space-between;
                width: 100%;

                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    width: 32%;
                }
            }

            .btns {
                display: flex;
                width: 100%;
                justify-content: space-between;

                button {
                    width: 48%;
                    
                    :hover {
                        transform: scale(1.02);
                    }
          
                }

                .edit {
                    background: linear-gradient(90deg, #CC81FF 0%, #A25CFF 100%);
                }


                .delete {
                    background: radial-gradient(100% 559.5% at 100% 50%, #FF5271 0%, #FF5E5E 100%);
                }
            }
        }

       
    }

    //Responsive 
    @media screen and (max-width: 575.98px)  {
        .budgets {
            .desc {
              div {
                p {
                    padding: 8px;
                    font-size: .85rem;
                }
              }
            }
        }

        .budgets {
            flex-direction: column;
           
            .desc {
                width: 100%;
                padding: 0px;
            }

            .budgetsFooter {
                justify-content: space-between;
                width: 100%;
                height: 108px;
                margin-top: 16px;
                padding: 0px;
                .btns {
                    button {
                        font-size: 1rem;
                    }
                }

            
                    .dates {
                        span {
                            font-size: .8rem;
                        }
                    }
                
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        .budgets {
            .desc {
              div {
                p {
                    padding: 12px;
                    font-size: .9rem;
                }
              }
            }
        }

        .budgets {
            flex-direction: column;
           
            .desc {
                width: 100%;
                padding: 0px;
            }

            .budgetsFooter {
                justify-content: space-between;
                width: 100%;
                height: 108px;
                margin-top: 16px;
                padding: 0px;
                .btns {
                    button {
                        font-size: 1rem;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        .budgets {
            .desc {
              div {
                p {
                    padding: 12px;
                    font-size: .9rem;
                }
              }
            }
        }

        .budgets {
            flex-direction: column;
           
            .desc {
                width: 100%;
                padding: 0px;
            }

            .budgetsFooter {
                justify-content: space-between;
                width: 100%;
                height: 108px;
                margin-top: 16px;
                padding: 0px;
                .btns {
                    button {
                        font-size: 1rem;
                    }
                }
            }
        }
        
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        .budgets {
            .desc {
              div {
                p {
                    padding: 8px;
                    font-size: .85rem;
                }
              }
            }
        }

        .budgetsFooter {
            .btns {
                button {
                    font-size: 1rem;
                }
            }
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        .budgets {
            .desc {
              div {
                p {
                    padding: 12px;
                }
              }
            }
        }

        .budgetsFooter {
            .btns {
                button {
                    font-size: 1rem;
                }
            }
        }
    }

`;