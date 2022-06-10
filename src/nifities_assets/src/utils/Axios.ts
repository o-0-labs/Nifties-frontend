import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';
import { useStore } from 'store/utils';
export enum ECode {
    OPERATION_SUCCESS = 0, // "操作成功"
}
export interface IApiData {
    data: any;
    code: ECode;
}

const requestInterceptor = async (config: AxiosRequestConfig) => {
    if (config.url && !config.url.includes('login')) {
        const { GlobalStore } = useStore();
        config.headers.Authorization = GlobalStore.token;
    }

    return config;
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