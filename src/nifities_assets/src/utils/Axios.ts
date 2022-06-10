import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';
import GlobalStore from 'store/GlobalStore';
export enum ECode {
    OPERATION_SUCCESS = 0, // "操作成功"
}
export interface IApiData {
    data: any;
    code: ECode;
}
const requestInterceptor = async (config: AxiosRequestConfig) => {
    if (config.url && !config.url.includes('login')) {
        config.headers.Authorization = `Bearer ${GlobalStore.token}`;
    }
    return config;
};
const responseInterceptorError = (err: AxiosError) => {
    if (err.response) {
        switch (err.response.status) {
            case 400:
                // 401 没有token
                message.error(String(err.response.data) || '参数错误');
                break;
            case 401:
                // 401 没有token
                message.error(String(err.response.data) || '权限错误');
                break;
            case 500:
                // 500 接口异常
                message.error(String(err.response.data) || '异常');
                break;
            default:
                break;
        }
        return Promise.reject(err);
    }
    return Promise.reject(err);
};
const requestInterceptorError = (err: AxiosError) => err;

class Http {
    private static instance: Http;
    public session!: AxiosInstance;

    constructor() {
        this.init();
    }
    private async init() {
        let baseURL = process.env.API_HOST;

        const options = {
            baseURL,
            timeout: 12000,
        };
        this.session = axios.create(options);
        this.session.interceptors.request.use(
            requestInterceptor,
            requestInterceptorError,
        );
        this.session.interceptors.response.use(
            (response) => response,
            responseInterceptorError,
        );
    }
    static getInstance() {
        if (!Http.instance) {
            Http.instance = new Http();
        }
        return Http.instance;
    }
    public checkResponse(response: AxiosResponse) {
        return new Promise((resolve, reject) => {
            const { data } = response;
            const { code, msg } = data;
            if (code !== ECode.OPERATION_SUCCESS) {
                message.warning(msg);
                return reject({ code, data: data?.data });
            }
            return resolve(data);
        });
    }

    /**
   * get方法
   * @param url api接口
   */

    get(api: string, params?: any) {
        return this.session(
            Object.assign({ method: 'get', url: api }, params),
        ).then((response: AxiosResponse) => {
            return this.checkResponse(response);
        });
    }

    /**
   * post方法750dis
   * @param url api接口
   * @param param 参数
   */
    post(api: string, params?: any) {
        return this.session(
            Object.assign({ method: 'post', url: api }, params),
        ).then((response: AxiosResponse) => {
            return this.checkResponse(response);
        });
    }
}

export default Http;