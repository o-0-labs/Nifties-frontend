import { makeAutoObservable } from "mobx";

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
  customerId = "";
  customerName = "Roc";
  token = "";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setCustomerName(val: string) {
    this.customerName = val;
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
        whitelist: ['canister-id'],
        host: 'https://network-address',
        timeout: 50000
      }
      // @ts-ignore
      const connected = await window.ic?.plug?.isConnected();
      if (!connected) {
        // @ts-ignore
        const publicKey = await window.ic?.plug?.requestConnect(params);
        if (publicKey) {
          console.log(`The connected user's public key is:`, publicKey);
          return Promise.resolve()
        }
        console.log('Plug wallet connection was refused')
        return Promise.reject()
      } else {
        console.log('has connect!')
        return Promise.resolve()
      }
    } catch (e) {
      console.log(e);
      return Promise.reject()
    }
  }

  /**
   * 创建Actor
   */
  async createActor() {
    // NNS Canister Id as an example
    const nnsCanisterId = 'qoctq-giaaa-aaaaa-aaaea-cai'

    // A partial Interface factory
    // for the NNS Canister UI
    // Check the `plug authentication - nns` for more
    const nnsPartialInterfaceFactory = ({ IDL }: any) => {
      const BlockHeight = IDL.Nat64;
      const Stats = IDL.Record({
        'latest_transaction_block_height': BlockHeight,
        'seconds_since_last_ledger_sync': IDL.Nat64,
        'sub_accounts_count': IDL.Nat64,
        'hardware_wallet_accounts_count': IDL.Nat64,
        'accounts_count': IDL.Nat64,
        'earliest_transaction_block_height': BlockHeight,
        'transactions_count': IDL.Nat64,
        'block_height_synced_up_to': IDL.Opt(IDL.Nat64),
        'latest_transaction_timestamp_nanos': IDL.Nat64,
        'earliest_transaction_timestamp_nanos': IDL.Nat64,
      });
      return IDL.Service({
        'get_stats': IDL.Func([], [Stats], ['query']),
      });
    };
    // @ts-ignore
    // Create an actor to interact with the NNS Canister
    // we pass the NNS Canister id and the interface factory
    const NNSUiActor = await window.ic?.plug?.createActor({
      canisterId: nnsCanisterId,
      interfaceFactory: nnsPartialInterfaceFactory,
    });

    // We can use any method described in the Candid (IDL)
    // for example the get_stats()
    // See https://github.com/dfinity/nns-dapp/blob/cd755b8/canisters/nns_ui/nns_ui.did
    const stats = await NNSUiActor.get_stats();
    console.log('NNS stats', stats);
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