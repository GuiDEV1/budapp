import React, { useContext, useEffect, useState } from "react"
import { EditButton, ModalOptions, UserModalCont } from "./UserConfigStyle"

//icons
import { FiEdit, FiX, FiSmile } from "react-icons/fi";

//images
import loading from 'assets/img/loading.gif';

//context
import { UserConfigContext } from "context/ConfigModal/ConfigModal";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";
import { AuthContext } from "context/AuthProvider/AuthProvider";
import { getUserLocalStorage } from "context/utils/utils";

export const UserConfigModal = () => {

    const userConfig = useContext(UserConfigContext);
    const contextUser = useContext(AuthContext);

    const [imgUrl, setImgUrl] = useState<string>('');
    const [progress, setProgress] = useState(0);

    //get information user
    const [updateUserName, setUpdateUserName] = useState<string>('');
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');

    //set information user in page
    const [nameUser, setNameUser] = useState<string>(getUserLocalStorage().name);
    const [profileUser, setProfileUser] = useState<string>(getUserLocalStorage().profile);
    
    //response
    const [errorInput, setErrorInput] = useState<number>(0);
    const [responseLoading, setResponseLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState({
        success: false,
        messege: 'Informações atualizadas com sucesso.'
    });

    const [successOptions, setSuccessOptions] = useState({
        successProfile: false,
        successName: false,
        successPassword: false,
    });
  
    const handleUpload = (e: any) => {
        e.preventDefault();

        //set new name from user
        if(updateUserName !== '') {
            updateName(updateUserName);
        }

        //set new password from user
        if(currentPassword !== '' && newPassword !== ''){
            updatePassword(currentPassword, newPassword);
        }

        //set profile from user in firebase
        const file = e.target[0]?.files[0];
        if(!file) return;

        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                setResponseLoading(true);
            },

            error => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImgUrl(url);
                })
            }
        )

        

    }   

    async function updateName(newName: string){
        const setNewName = await userConfig.editName(newName);
        if(setNewName.erro === true){
            return null;
        }
        setUpdateUserName('');
        setNameUser(getUserLocalStorage().name);
        setSuccessOptions(prevState => ({...prevState, successName: true}));
        return;
    }

    async function updatePassword(currentPassword: string, newPassword: string) {
        const password = await userConfig.editPassword(currentPassword, newPassword);
        if(password.erro === true) {
            setErrorInput(1);
            setCurrentPassword('');
            setNewPassword('');
            return null;
        }

        setCurrentPassword('');
        setNewPassword('');
        setSuccessOptions(prevState => ({...prevState, successPassword: true}));
        return null;
        
    }

    async function updateProfile(){
        const profile = await userConfig.updateProfile(imgUrl); 

        if(profile.erro) {
            return null;
        };
        
        setProfileUser(imgUrl);
        setSuccessOptions(prevState => ({...prevState, successProfile: true}));
        return;
    }

    const handleResponse = () => {

        if(successOptions.successProfile || successOptions.successName || successOptions.successPassword){
            return setSuccess(prevState => ({...prevState, success: true, messege: success.messege}));
        }
    }

    useEffect(() => {
        if(imgUrl !== '') {
            updateProfile();
        }

    },[imgUrl])

    useEffect(() => {
        setTimeout(() => {
            setErrorInput(0);
        }, 5000)

    }, [errorInput])

    useEffect(() => {
        handleResponse();
        setTimeout(() => {
            setSuccess(prevState => ({...prevState, success: false, messege: success.messege}));

        }, 6000)
    }, [successOptions])

    useEffect(() => {
        if(progress === 100) {
            setResponseLoading(false);
        }

    }, [progress]);


    return (
        <UserModalCont>
            <ModalOptions>
            <form onSubmit={handleUpload}>
                <div className="modalHeader">
                    <div>
                        <h4>Configuração do perfil</h4>
                        <p>Confirme as modificações para validar a atualização</p>
                    </div>
                    <FiX className="exitIcon" onClick={() => userConfig.setOpenModal(false)}/>
                </div>

                <div className="modalInfos">

                    <div className="userAvatar">
                        <span className="addImg">
                            <label htmlFor='avatar'><FiEdit className="editIcon"/></label>
                            <input type="file" name='avatar' id='avatar'/>
                            {profileUser !== '' ? 
                                <img className="imgProfile" src={profileUser} />
                            : ''}
                        </span>
                        <label htmlFor='avatar' className="avatarText">Adicione uma foto de perfil</label>
                        {responseLoading && <img className="loading" src={loading} />}
                    </div>

                    <p className="nameUser">{nameUser}</p>

                </div>

                <div className="editName">
                    <label htmlFor="editName">Alterar nome de perfil</label>
                    <input type="text" 
                        value={updateUserName} 
                        name="editName" 
                        id="editName" 
                        placeholder="digite seu novo nome"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateUserName(e.target.value)}
                    />
                </div>

                <div className="editPassword">
                    <p className="passwordLabel">Alterar senha da conta</p>

                    <div className="passwordInputs">
                        <div className="current">
                           <div className="currentLabel">
                            <label htmlFor="current">Senha atual</label>
                            <span style={{opacity: errorInput}}>A senha atual é invalida</span>
                           </div>
                            <input 
                                type="password" 
                                name="current" 
                                id="current" 
                                value={currentPassword}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value)}  
                            />
                        </div>

                        <div className="newPassword">
                            <label htmlFor="newPassword">Nova senha</label>
                            <input 
                                type="password" 
                                name="newPassword" 
                                id="newPassword" 
                                value={newPassword}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value) }
                            />
                        </div>
                    </div>
                </div>

                <div className="response"> 
                    {success.success && (
                        <p>
                            <FiSmile className="responseIcon"/>
                            {success.messege}
                        </p>
                    )}
                </div>

                <EditButton type="submit">
                    Confirmar alterações
                </EditButton>
            </form>
            </ModalOptions>
        </UserModalCont>
    )
}