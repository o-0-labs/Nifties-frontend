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

class _GlobalService {
    loginService(params: any) {
        return Axios.getInstance().post(`/login`, { data: params }) as Promise<IApiData>;
    }
}
const GlobalService = new _GlobalService();
export { IApiData, GlobalService };
