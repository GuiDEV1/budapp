import { updateProfileAPI, updateNameAPI, updatePasswordAPI } from "apis/User/UserAPI";
import { IUpdateProfile, IUpdateName, IUpdatePassword } from "interfaces/User/userconfig.mode";

export async function upadteProfile(userProfile: IUpdateProfile) {
  try {
    const profile = fetch(updateProfileAPI, {
        method: "POST",
        headers: {"Content-Type": "application/json; charset=UTF-8"},
        body: JSON.stringify(userProfile)
    })
    .then(resp => resp.json())
    .then(data => {
        return data
    });

    return profile;

  } catch (error) {
    return null;
  }
};

export async function updateName(userName: IUpdateName) {
   try {
    const newName = fetch(updateNameAPI, {
        method: "POST",
        headers: {"Content-Type": "application/json; charset=UTF-8"},
        body: JSON.stringify(userName)
    })
    .then(resp => resp.json())
    .then(data => {
        return data
    });

    return newName;
    
   }catch (error) {
    return null;
   }
};

export async function updatePassword(userPassword: IUpdatePassword) {
   try {
    const newPassword = fetch(updatePasswordAPI, {
        method: "POST",
        headers: {"Content-Type": "application/json; charset=UTF-8"},
        body: JSON.stringify(userPassword)
    })
    .then(resp => resp.json())
    .then(data => {
        return data
    });

    return newPassword;
    
   } catch (error) {
    return null
   }
};

