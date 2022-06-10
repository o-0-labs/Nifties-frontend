export interface ILoginData {
    user_id: string;
    pub_key: string;
    user_name?: any;
    email?: any;
    token: string;
    profile_photo?: any;
    create_time: Date;
}

export interface IReqLogin {
    call_name: string,
    timestamp: number,
    signature: string
}
export interface IReqRegister {
    user_id: string;
    call_name: string;
    user_name: string;
    email: string;
    profile_photo: string;
}