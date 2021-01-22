//Define 
export interface userinfoDef {
    isLogin: boolean,
    token:string,
    email:string,
    displayName:string,
    defaultURL:string
};

export interface IUserContext {
    isLogin: boolean,
    updateIsLogin(isLogin: boolean): void,
    token:string,
    updateToken(token: string): void
};

export enum righttypeDef {
    NORIGHT,
    ADMIN,
    USER
}

export interface UserrightsDef {
    righttype:righttypeDef
}

export interface IUser {
    authStatusReported:boolean,
    isUserSignedIn:boolean,
    email:string,
    displayName:string,
    sessionrest:number,
    token:string
}

export interface IUser1 {
    user:IUser
}

export interface ILoginPkt {
    status:number,
    message:string,
    isLogin:boolean,
    data:IUser1
}

export interface routeDef {
    path: string,
    component: any,
    routes?: routeDef[],
    isAuth:boolean,
    isDisplay?:boolean,
    displayName?:string,
    icon?:string
}