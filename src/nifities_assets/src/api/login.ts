import request from './request';

export interface ILoginData {
    user_id: string;
    pub_key: string;
    user_name?: any;
    email?: any;
    token: string;
    profile_photo?: any;
    create_time: Date;
}

export function loginService(params: any): Promise<ILoginData> {
    return request.post(`/login`, params).then((res) => res.data.data);
}