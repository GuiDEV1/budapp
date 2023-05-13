export interface IUser {
    email?: string;
    id?: number;
    name?: string;
    profile?: string;
}

export interface IContextUser extends IUser {
    authenticate: (email: string, password: string) => Promise<any>;
    register: (name: string, email: string, password: string) => Promise<any>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}

export interface IUserRegister {
    name: string;
    email: string;
    password: string;
}

export interface ILogin {
    email: string;
    password: string;
}