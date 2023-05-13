import { IUserRegister, ILogin, IUser } from "interfaces/User/user.model";

export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem('user', JSON.stringify(user));
 }
 
 export function getUserLocalStorage(){
    const json = localStorage.getItem('user');
 
    if(!json) {
       return null;
    }
 
    const user = JSON.parse(json);
    return user ?? null;
 }