import { makeAutoObservable } from "mobx";
import { GlobalService, IApiData } from 'api/global';
import { message } from "antd";
import { to } from 'utils/Tools'
import { getUserInfo } from "utils/Auth";

export interface ITransfer {
  to: String,
  amount: number,
  opts?: {
    fee?: number,
    memo?: string,
    from_subaccount?: Number,
    created_at_time?: {
      timestamp_nanos: number
    },
  },
}

export interface IBurnXTC {
  Cycles: number;
  CanisterId: string;
}

export interface IUserInfo {
  userId: string;
  userName: string;
  profilePhoto: string;
  email: string;
}



class GlobalStore {
  //合约地址
  helloCanisterId = 's62ka-oqaaa-aaaak-qaokq-cai'
  principalId = ''
  infoVisible = false
  confirmLoading = false
  userInfo: IUserInfo = getUserInfo()
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

  /**
   * 连接钱包，需要用户授权
   * @returns 
   */
  async creatConnect() {
    try {
      const params = {
        whitelist: [this.helloCanisterId],
        timeout: 50000
      }
      // @ts-ignore
      const connected = await window.ic?.plug?.isConnected();
      if (!connected) {
        // @ts-ignore
        const publicKey = await window.ic?.plug?.requestConnect(params);
        if (publicKey) {
          return Promise.resolve('success')
        }
        return Promise.reject('Plug wallet connection was refused!')
      } else {
        return Promise.resolve('success')
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }

  async login() {
    message.loading({ content: 'Loading...', duration: 0 })
    const idlFactory = ({ IDL }: any) => {
      return IDL.Service({ 'sign': IDL.Func([IDL.Nat64], [IDL.Text], ['query']) });
    };

    //初始化actor
    //@ts-ignore
    const helloActor = await window.ic.plug.createActor({
      canisterId: this.helloCanisterId,
      interfaceFactory: idlFactory,
    });

    //调用合约方法
    let result = await helloActor.sign(65);

    //@ts-ignore
    this.principalId = await window.ic.plug.agent.getPrincipal();

    const [err, res] = await to(GlobalService.login({
      call_name: `${this.principalId}`,
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
        message.success('登录成功！')
      } else {
        this.infoVisible = true
      }
    } else {
      message.error('登陆失败！')
    }
  }

  /**
   * 查询余额
   */
  async requestBalance() {
    try {
      // @ts-ignore
      const result = await window.ic?.plug?.requestBalance();
      return Promise.resolve(result[0]?.value)
    } catch (error) {
      return Promise.reject()
    }
  }

  /**
   * 请求交易
   */
  async requestTransfer(params: ITransfer) {
    try {
      // @ts-ignore
      const result = await window.ic?.plug?.requestTransfer(params);
      const transferStatus = result?.transactions?.transactions[0]?.status;
      if (transferStatus === 'COMPLETED') {
        console.log('Plug wallet transferred')
      } else if (transferStatus === 'PENDING') {
        console.log('Plug wallet is pending.')
      } else {
        console.log("Plug wallet failed to transfer")
      }
      return Promise.resolve(transferStatus)
    } catch (error) {
      return Promise.reject()
    }
  }

  async requestBurnXTC(params: IBurnXTC) {
    try {
      // @ts-ignore
      const result = await window.ic?.plug?.requestBurnXTC(params);
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject()
    }
  }

  async onSubmit(values: any) {
    this.confirmLoading = true
    const [err, res] = await to(GlobalService.register({
      user_name: values.username,
      email: values.email,
      user_id: this.userInfo.userId,
      call_name: `${this.principalId}`,
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
      message.success('注册成功！')
    } else {
      message.error('注册失败')
    }
  }
}
export default new GlobalStore();