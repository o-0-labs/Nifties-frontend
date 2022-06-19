import { makeAutoObservable } from "mobx";
import { GlobalService, IApiData } from 'api/global';
import { message } from "antd";
import { to } from 'utils/Tools'
import { getUserInfo, getPrincipalId } from "utils/Auth";
import PlugWallet from "utils/PlugWallet";

const canisterIdConfig = require('api/canisterIdConfig.json');

export interface IUserInfo {
  userId: string;
  userName: string;
  profilePhoto: string;
  email: string;
}



class GlobalStore {
  infoVisible = false
  confirmLoading = false
  userInfo: IUserInfo = getUserInfo()
  balance: number = 0
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setInfoVisible(visible: boolean) {
    this.infoVisible = visible
  }

  /**
   * 检查插件安装状态
   * @returns 
   */
  checkPlugStatus() {
    // @ts-ignore
    if (!window?.ic?.plug) {
      return false;
    }
    return true
  }

  async login() {
    message.loading({ content: 'Loading...', duration: 0 })

    const idlFactory = ({ IDL }: any) => {
      return IDL.Service({ 'sign': IDL.Func([IDL.Nat64], [IDL.Text], ['query']) });
    };
    // const NNS_LEDGER = process.env.SMART_CONTRACT_ADDRESS_NNS_LEDGER
    // const ADDRESS_GRANTS = process.env.SMART_CONTRACT_ADDRESS_GRANTS
    const whitelist = [canisterIdConfig.loginCanisterId, canisterIdConfig.nftCanisterId]
    // const plug = new PlugWallet([canisterIdConfig.loginCanisterId, canisterIdConfig.nftCanisterId, NNS_LEDGER, ADDRESS_GRANTS])
    // const plugActor = await plug.getActor(canisterIdConfig.loginCanisterId, idlFactory)
    //连接钱包
    //@ts-ignore
    await window.ic.plug.requestConnect({
      whitelist,
      timeout: 50000
    });
    //@ts-ignore
    const principalId = await window.ic.plug.agent.getPrincipal();
    sessionStorage.setItem('principalId', principalId)
    //初始化actor
    //@ts-ignore
    const plugActor = await window.ic.plug.createActor({
      canisterId: canisterIdConfig.loginCanisterId,
      interfaceFactory: idlFactory,
    });
    //调用合约方法
    let result = await plugActor.sign(65);

    const [err, res] = await to(GlobalService.login({
      call_name: `${principalId}`,
      timestamp: 65,
      signature: result
    }) as Promise<IApiData>)
    message.destroy()
    if (err) return
    if (res.code === 0) {
      this.userInfo = {
        userId: res.data.user_id,
        userName: res.data.user_name,
        profilePhoto: res.data.profile_photo,
        email: res.data.email
      }
      sessionStorage.setItem('token', res.data.token)
      sessionStorage.setItem('userInfo', JSON.stringify({
        userId: res.data.user_id,
        userName: res.data.user_name,
        profilePhoto: res.data.profile_photo,
        email: res.data.email
      }))
      if (res.data.user_name) {
        message.success('Login Success')
        this.requestBalance()
      } else {
        this.infoVisible = true
      }
    } else {
      message.error('Login Failed')
    }
  }

  /**
   * 查询余额
   */
  async requestBalance() {
    try {
      // @ts-ignore
      if (!window.ic.plug) {
        return
      }
      // @ts-ignore
      const result = await window.ic.plug.requestBalance();
      console.log(result)
      this.balance = result[0]?.amount
      return Promise.resolve(result[0]?.amount)
    } catch (error) {
      return Promise.reject()
    }
  }

  async onSubmit(values: { username: string, email: string }) {
    this.confirmLoading = true
    const [err, res] = await to(GlobalService.register({
      user_name: values.username,
      email: values.email,
      user_id: this.userInfo.userId,
      call_name: `${getPrincipalId()}`,
      profile_photo: 'https://www.datocms-assets.com/73647/1653631343-nft.png'
    }) as Promise<IApiData>)
    this.confirmLoading = false
    this.infoVisible = false
    if (err) {
      return
    }
    if (res && res.code === 0) {
      this.userInfo = {
        userId: res.data.user_id,
        userName: res.data.user_name,
        profilePhoto: res.data.profile_photo,
        email: res.data.email
      }
      sessionStorage.setItem('userInfo', JSON.stringify({
        ...JSON.parse(sessionStorage.getItem('userInfo') ?? ""),
        userName: res.data.user_name,
        profilePhoto: res.data.profile_photo,
        email: res.data.email
      }))
      this.requestBalance()
      message.success('Register successfully')
    } else {
      message.error('Registration failed')
    }
  }
}
export default new GlobalStore();