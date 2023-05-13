import { stringLength } from "@firebase/util";
import { getUserLocalStorage, setUserLocalStorage } from "context/utils/utils";
import { IUserConfig, IUserConfigProvider } from "interfaces/User/userconfig.mode";
import React, {createContext, useState} from "react";
import { upadteProfile, updateName, updatePassword } from "./utilsConfig";

export const UserConfigContext = createContext<IUserConfig>({} as IUserConfig);

export const UserConfigProvider = ({children}: IUserConfigProvider) => {

    const [openModal, setOpenModal] = useState<boolean>(false);

    async function editName(newName: string) {
        const idUser: number = getUserLocalStorage().id;
        
        const userName = {
            id: idUser,
            name: newName
        }

        const newUserName = await updateName(userName);
        const payload = {...newUserName}

        if(payload.erro) {
            return payload;
        } 

        setUserLocalStorage(payload.user); 
    
        return {...payload};
    }

    async function editPassword(currentPassword: string, newPassword: string) {
        const idUser: number = getUserLocalStorage().id;

        const userPassword = {
            id: idUser,
            currentPassword: currentPassword,
            newPassword: newPassword
        };
    
        const newUserPassword = await updatePassword(userPassword);
        const payload = {...newUserPassword}

        return {...payload};
        
    }

    async function updateProfile(urlImg: string) {
        const idUser: number = getUserLocalStorage().id;

        const userProfile = {
            id: idUser,
            profile: urlImg
        }

        const newProfile = await upadteProfile(userProfile);
        const payload = {...newProfile}

        if(payload.erro) {
            return payload;
        } 

        setUserLocalStorage(payload.user); 
    
        return {...payload};
    }

   
    return (
        <UserConfigContext.Provider value={{editName, editPassword, updateProfile, openModal, setOpenModal}}>
            {children}
        </UserConfigContext.Provider>
    )
}



