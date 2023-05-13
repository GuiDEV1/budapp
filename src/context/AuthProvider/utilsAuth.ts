import { registerAPI, loginAPI } from "apis/User/UserAPI";
import { IUserRegister, ILogin, IUser } from "interfaces/User/user.model";

export async function RegisterRequest({user}: {user: IUserRegister}) {
   try {
       const request = fetch(registerAPI, {
         method: "POST",
         headers: {"Content-Type": "application/json; charset=UTF-8"},
         body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(data => {
         return data
      });

      return request;
 

   }catch (error) {
      return null;
   }
};

export async function LoginRequest({user}: {user: ILogin}) {
   try {
      const request = fetch(loginAPI, {
         method: 'POST',
         headers: {"Content-Type": "application/json; charset=UTF-8"},
         body: JSON.stringify(user)
      })
      .then(resp => resp.json())
      .then(data => {
         return data
      })

      return request;

   }catch (error) {
      return null;
   }
};

