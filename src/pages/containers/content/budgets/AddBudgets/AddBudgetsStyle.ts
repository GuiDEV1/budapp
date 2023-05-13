import styled from "styled-components";

export const AddBudgetsCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    margin-bottom: 28px;

    .addHeader {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 16px;

        .budgetsName {
            display: flex;
            flex-direction: column;
            width: 50%;
            padding-right: 8px;

            label {
                margin-bottom: 8px;
            }

            input {
                width: 100%;
            }
        }

        .budgetsClient {
            display: flex;
            flex-direction: column;
            width: 50%;
            padding-left: 8px;

            label {
                margin-bottom: 8px;
            }

            input {
                width: 100%;
            }
        }
    }

    .budgets {
        display: flex;
        width: 100%;
        justify-content: space-between;

        .desc {
            display: flex;
            flex-direction: column;
            width: 50%;
            padding-right: 8px;

            label {
                margin-bottom: 8px;
            }

            input {
                min-height: 128px;
                max-height: 128px;
                min-width: 100%;
                max-width: 100%;
                padding: 20px;
            }
        }

        .budgetsFooter {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 50%;
            padding-left: 8px;

            .budgetsItems {
                display: flex;
                width: 100%;
                justify-content: space-between;
            
                .start, .final, .value {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 33%;

                    label {
                        margin-bottom: 8px;
                    }

                    input {
                        width: 90%;
                    }

                }
            }

            button {
                display: flex;
                align-items: center;
                justify-content: center;

                .iconAdd {
                    margin-right: 8px;
                }
            }
        }
    }

    //Responsive 
    @media screen and (max-width: 575.98px) {
        margin-bottom: 48px;
        
        .labelDefault {
            font-size: .9rem;
        }

        .budgets {
            display: flex;
            flex-direction: column;

            .desc {
                width: 100%; 
                padding: 0px;
            }

            .budgetsFooter {
                width: 100%;
                height: 100%;
                padding: 0px;
                margin: 16px 0px;

                button {
                    margin-top: 22px;
                }
            }
        }

    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        margin-bottom: 48px;

        .labelDefault {
            font-size: 1rem;
        }

        .budgets {
            display: flex;
            flex-direction: column;

            .desc {
                width: 100%; 
                padding: 0px;
            }

            .budgetsFooter {
                width: 100%;
                height: 100%;
                padding: 0px;
                margin: 16px 0px;

                button {
                    margin-top: 22px;
                }
            }
        }


    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        margin-bottom: 48px;

        .labelDefault {
            font-size: 1rem;
        }

        .budgets {
            display: flex;
            flex-direction: column;

            .desc {
                width: 100%; 
                padding: 0px;
            }

            .budgetsFooter {
                width: 100%;
                height: 100%;
                padding: 0px;
                margin: 16px 0px;

                button {
                    margin-top: 22px;
                }
            }
        }

    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        .labelDefault {
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        .labelDefault {
            font-size: 1rem;
        }
    }


`;