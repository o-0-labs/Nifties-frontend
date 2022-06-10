import Axios, { IApiData } from 'utils/Axios';

export interface ILoginData {
    user_id: string;
    pub_key: string;
    user_name?: any;
    email?: any;
    token: string;
    profile_photo?: any;
    create_time: Date;
}

export interface IData {
    code: number;
    data: ILoginData
}

class _GlobalService {
    loginService(params: any) {
        return Axios.getInstance().post(`/login`, { data: params }) as Promise<IApiData>;
    }
}
const GlobalService = new _GlobalService();
export default GlobalService;
