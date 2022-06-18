import Axios, { IApiData } from 'utils/Axios';
import { IReqLogin, IReqRegister } from './interface'


class _GlobalService {
    /**
     * 登陆
     * @param params 
     * @returns 
     */
    login(params: IReqLogin) {
        return Axios.getInstance().post(`/login`, { data: params }) as Promise<IApiData>;
    }
    /**
     * 注册
     * @param params 
     * @returns 
     */
    register(params: IReqRegister) {
        return Axios.getInstance().post(`/register`, { data: params }) as Promise<IApiData>;
    }

    uploadImg(params: any) {
        return Axios.getInstance().post(`/img/upload`, { data: params }) as Promise<IApiData>;
    }
}

const GlobalService = new _GlobalService();
export { IApiData, GlobalService };
