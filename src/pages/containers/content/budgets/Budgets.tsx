import { HeaderSearch } from 'components/HeaderSearch/HeaderSearch';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { SetStateAction, useEffect, useState } from 'react';

import { FaUserFriends } from "react-icons/fa";
import { AddBudgets } from './AddBudgets/AddBudgets';


import { AddBudgetsButton, BudgetsCont, BudgetsItems } from './BudgetsStyle';

import { FaPlusCircle } from "react-icons/fa";
import { Budget } from './Budget/Budget';
import { getUserLocalStorage } from 'context/utils/utils';
import { GetBudgetsAll } from './utilsBudgets';
import { ErrorService } from 'components/Services/error/ErrorService';
import { ModalDelete } from './modalDelete/ModalDelete';
import { EditBudget } from './EditBudget/EditBudget';

export const Budgets = () =>{

    const [openAddBudgets, setOpenAddBudgets] = useState<boolean>(false);
    const [allBudgets, setAllBudgets] = useState<Array<object>>([]);

    const [error, setError] = useState<boolean>(false);
    const [modalDelete, setModalDelete] = useState<boolean>(false);
    const [modalEdit, setModalEdit] = useState<boolean>(false);

    const [budgetToDelete, setBudgetToDelete] = useState({
        name: '',
        idUser: ''
    })
    const [budgetToEdit, setBudgetToEdit] = useState({
        name: '',
        client: '',
        description: '',
        startDate: '',
        finalDate: '',
        value: '',
        idUser: '',
    })


    async function GetBudgets() {
        const getById = {
            idUser: getUserLocalStorage().id
        }

        const requestBudgets: any = await GetBudgetsAll(getById);
        if(requestBudgets.budgets) {
            requestBudgets.budgets.forEach((element: any) => {
                if(!allBudgets.includes(element)){
                    setAllBudgets(prevState => [...prevState, element]);
                }
            })
        }

    }

    const deleteBudget = (name: string) => {
        setModalDelete(true);

        setBudgetToDelete(prevState => ({
            ...prevState,
            name: name,
            idUser: getUserLocalStorage().id
        }));

    }

    const editBudget = (name: string, client: string, desc: string, startDate: string, finalDate: string, value: string) => {
        setModalEdit(true);

        setBudgetToEdit(prevState => ({
            ...prevState,
            name: name,
            client: client,
            description: desc,
            startDate: startDate,
            finalDate: finalDate,
            value: value,
            idUser: getUserLocalStorage().id
        }));
        

    }

    const renderList = () => {
        window.location.reload();
    }

    useEffect(() => {
        GetBudgets();
        
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setError(false);
        }, 8000)

    }, [error])
    
    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaUserFriends />}
                title="Orçamentos"
            />
            {error && <ErrorService errorText="Orçamento já cadastrado"/>}
            

            <BudgetsCont>
                {modalDelete && 
                    <ModalDelete 
                        closeModal={setModalDelete}
                        budgetToDelete={budgetToDelete}
                        allBudgets={allBudgets}
                    />
                }
                {modalEdit && <EditBudget handleModal={setModalEdit} budgetToEdit={budgetToEdit} renderList={renderList} setError={setError}/>}
                
                {!openAddBudgets && (
                     <AddBudgetsButton 
                     className='buttonDefault'
                     onClick={() => setOpenAddBudgets(true)}
                     >
                         <FaPlusCircle />
                         Cadastrar Orçamento
                    </AddBudgetsButton>
                )}
                {openAddBudgets && <AddBudgets closeAddBudget={setOpenAddBudgets} setAllBudgets={setAllBudgets} setError={setError}/>}
                

                <BudgetsItems>
                    <div className='itemsTitle'>
                        <h3>Seus orçamentos</h3>
                    </div>

                    <div className='budgetsItems'>
                    {allBudgets.map((item: any) => {
                            return (
                               <Budget 
                                    key={item.id}
                                    name={item.name}
                                    client={item.client}
                                    desc={item.description}
                                    startDate={item.startDate}
                                    finalDate={item.finalDate}
                                    value={item.value}
                                    deleteBudget={deleteBudget}
                                    modalEdit={editBudget}       
                               />
                            );
                        })}
                    </div>
            
                </BudgetsItems>
                
            </BudgetsCont>

        </>
    )
};

