import Axios, { IApiData } from 'utils/Axios';

interface IAuthData {
    oauth_token: string;
    oauth_verifier: string;
}
class _BuffService {

    /**
     * 判断用户是否已授权twitter
     * @returns 
     */
    checkTwitter() {
        return Axios.getInstance().post(`/check_twitter`) as Promise<IApiData>;
    }

    /**
     * 授权
     * @returns 
     */
    authTwitter(params: IAuthData) {
        return Axios.getInstance().post(`/access_token`, { data: params }) as Promise<IApiData>;
    }

    /**
     * 跳转授权页
     * @returns 
     */
    authorizeUrl() {
        return Axios.getInstance().post(`/authorize_url`) as Promise<IApiData>;
    }

    /**
     * 解除授权
     */
    removeTwitter() {
        return Axios.getInstance().post(`/remove_twitter`) as Promise<IApiData>;
    }

    /**
     * 发布推文
     * @returns 
     */
    publishTwitter(params: any) {
        return Axios.getInstance().post(`/tweets`, { data: params }) as Promise<IApiData>;
    }

    /**
     * 获取时间线
     * @returns 
     */
    getTimeline(params: any) {
        return Axios.getInstance().post(`/timeline`, { data: params }) as Promise<IApiData>;
    }
}

const BuffService = new _BuffService();
export { IApiData, BuffService, IAuthData };
