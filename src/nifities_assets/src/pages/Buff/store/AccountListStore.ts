import { makeAutoObservable } from "mobx";
import { BuffService, IApiData, IAuthData } from "../services";
import { to } from 'utils/Tools'
import Axios from 'axios'
import { getToken } from 'utils/Auth'
import { message } from "antd";
import dayjs from 'dayjs'

class AccountListStore {
    /**
     * 是否已授权
     */
    authFlag = false
    createVisible = false
    confirmLoading = false
    publishContent = ''
    twitterList: any[] = []
    total = 0
    startTime = `${dayjs().get('year')}-1-1`
    loading = false

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async checkTwitter() {
        const [err, res] = await to(BuffService.checkTwitter() as Promise<IApiData>)
        if (err) {
            return
        }
        if (res && res.code === 0) {
            this.authFlag = res.data.twitter_flag
        }
    }

    async toAuth() {
        Axios.get('http://101.33.60.164/authorize_url', { headers: { Authorization: `Bearer ${getToken()}` } }).then((res) => {
            //新打开一个页面（about:blank是打开浏览器空白页的命令）, _blank：打开一个新的窗口
            var newPage = window.open("about:blank", "_blank");
            //将后台传过来的html页面写到新打开的浏览器窗口中显示
            newPage.document.write(res.data);
        })
    }

    async onCreate() {
        await this.checkTwitter()
        if (!this.authFlag) {
            await this.toAuth()
        } else {
            this.createVisible = true
        }
    }

    async authTwitter(data: IAuthData) {
        const [err, res] = await to(BuffService.authTwitter(data) as Promise<IApiData>)
        if (err) {
            return
        }
        if (res && res.code === 0) {
            this.authFlag = true
        }
    }

    async publishTwitter() {
        this.confirmLoading = true
        const [err, res] = await to(BuffService.publishTwitter({ text: this.publishContent }) as Promise<IApiData>)
        if (err) {
            this.confirmLoading = false
            return
        }
        if (res && res.code === 0) {
            message.success('publish success')
            this.createVisible = false
            this.publishContent = ''
        }
        this.confirmLoading = false
    }

    async getTwitterList() {
        this.loading = true
        const [err, res] = await to(BuffService.getTimeline({ "max_results": 15, startTime: this.startTime }) as Promise<IApiData>)
        if (err) {
            this.loading = false
            return
        }
        if (res && res.code === 0) {
            this.twitterList = res.data.data
            this.total = res.data.meta.result_count
        }
        this.loading = false
    }

    async removeTwitter() {
        const [err, res] = await to(BuffService.removeTwitter() as Promise<IApiData>)
        if (err) {
            return
        }
        if (res && res.code === 0) {
            message.success('remove success')
        }
    }
}

export default AccountListStore;
export interface IAccountListStore extends AccountListStore { }