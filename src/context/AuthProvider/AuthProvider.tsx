import React, {createContext, useState, useEffect} from 'react';
import { IAuthProvider, IContextUser, IUser } from 'interfaces/User/user.model';
import { RegisterRequest, LoginRequest } from './utilsAuth';
import { getUserLocalStorage, setUserLocalStorage } from 'context/utils/utils';


export const AuthContext = createContext<IContextUser>({} as IContextUser);

export const AuthProvider = ({children}: IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const user = getUserLocalStorage();
        if(user) {
            setUser(user);
        }
    }, []);


    async function register(name: string, email: string, password: string) {
        const user = {
            name: name,
            email: email,
            password: password
        }
       const registerUser = await RegisterRequest({user});
       const payload = {...registerUser};
      
      if(payload.erro) {
        return payload;
      } 
      setUser(payload.user);
      setUserLocalStorage(payload.user); 

      return {...payload};
    };

    async function authenticate(email: string, password: string) {
        const user = {
            email: email,
            password: password
        };

        const loginUser = await LoginRequest({user});
        const payload = {...loginUser};

        if(payload.erro) {
            return payload;
        }
        
        setUser(payload.user);
        setUserLocalStorage(payload.user); 

        return {...payload};
        
    }

    function logout(): void {
        setUser(null);
        setUserLocalStorage(null);
    } 

    return (
        <AuthContext.Provider value={{...user, register, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    );

   
};