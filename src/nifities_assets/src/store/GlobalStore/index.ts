import { makeAutoObservable } from "mobx";
import { GlobalService } from 'api/global';
import { message } from "antd";

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



class GlobalStore {
  //合约地址
  helloCanisterId = 's62ka-oqaaa-aaaak-qaokq-cai'
  token = ""
  principalId = ''
  userId = ''
  userName = ''
  profilePhoto = ''
  email = ''
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
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

    const { code, data } = await GlobalService.loginService({
      call_name: `${this.principalId}`,
      timestamp: 65,
      signature: result
    })
    if (code === 0) {
      this.userId = data.user_id
      this.token = data.token
      this.userName = data.user_name
      this.profilePhoto = data.profile_photo
      this.email = data.email
      if (data.user_name) {
        message.success('登录成功！')
      } else {

      }
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
}
export default new GlobalStore();