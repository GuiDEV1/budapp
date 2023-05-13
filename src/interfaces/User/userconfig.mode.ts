
export interface IUserConfig {
    editName: (newName: string) => Promise<any>;
    editPassword: (currentPassword: string, newPassword: string) => Promise<any>;
    updateProfile: (urlImg: string) => Promise<any>;
    openModal?: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface IUserConfigProvider {
    children: JSX.Element[];
};

export interface IUpdateProfile {
    id: number;
    profile: string;
};

export interface IUpdateName {
    id: number;
    name: string;
};

export interface IUpdatePassword {
    id: number;
    currentPassword: string;
    newPassword: string;
};