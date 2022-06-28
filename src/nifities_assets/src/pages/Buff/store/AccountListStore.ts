import { makeAutoObservable } from "mobx";
import { BuffService, IApiData, IAuthData } from "../services";
import { to } from 'utils/Tools'
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
    photoUrl = ''

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async checkTwitter() {
        this.loading = true
        const [err, res] = await to(BuffService.checkTwitter() as Promise<IApiData>)
        if (err) {
            this.loading = false
            return
        }
        if (res && res.code === 0) {
            this.loading = false
            this.authFlag = res.data.twitter_flag
            return
        }
        this.loading = false
    }

    async toAuth() {
        const [err, res] = await to(BuffService.authorizeUrl() as Promise<IApiData>)
        if (err) {
            return
        }
        if (res && res.code === 0) {
            window.open(res.data.authorize_url, "_blank");
        }
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
        await this.checkTwitter()
        if (!this.authFlag) {
            message.error('Please authorize')
            return
        }
        const [err, res] = await to(BuffService.getTimeline({
            "max_results": 15
        }) as Promise<IApiData>)
        if (err) {
            this.loading = false
            return
        }
        if (res && res.code === 0) {
            this.loading = false
            this.twitterList = res.data.data
            this.total = res.data.meta.result_count
            this.photoUrl = res.data?.includes?.users[0]?.profile_image_url || ''
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