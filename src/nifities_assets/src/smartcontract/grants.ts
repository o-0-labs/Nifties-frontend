import { idlFactory } from './grants.did';
import PlugWallet from '../utils/PlugWallet';
import { Grant, AddGrantResult, Funder, FunderRecord } from './grantType';

export default class GrantContract {
  contractAddress: string;
  plug: unknown;
  plugActor: unknown;

  constructor(contractAddress: string) {
    this.contractAddress = contractAddress;
  }

  async init() {
    this.plug = new PlugWallet([this.contractAddress]);

    // @ts-ignore
    const publicKey = await this.plug.connect();
    
    // console.log(
    // // @ts-ignore
    //   `principalId: ${this.plug.principalId}, accountId: ${this.plug.accountId}`
    // );

    // @ts-ignore
    this.plugActor = await this.plug.getActor(this.contractAddress, idlFactory);
    // console.log(this.plugActor);
  }

  async add(grant: Grant): Promise<AddGrantResult> {
    // @ts-ignore
    return await this.plugActor.create_crowd(grant);
  }

  async get(): Promise<Grant> {
    // @ts-ignore
    return await this.plugActor.get_crowd();
  }

  async fund(
    amount: bigint
  ): Promise<number> {
    const transaction = {
      idl: idlFactory,
      canisterId: this.contractAddress,
      methodName: 'fund',
      args: [amount],
      onSuccess: (res: unknown) => {
        // 本笔交易成功回调
      },
      onFail: (err: unknown) => {
        // 本笔交易失败回调
      },
    };

    // @ts-ignore
    return await this.plug.batchTransactions([transaction]);
  }

  async getFunder(): Promise<Funder> {
    // @ts-ignore
    return await this.plugActor.get_funder();
  }

  async getFunders(): Promise<Funder> {
    if (!this.plugActor) {
      await this.init();
    }
    // @ts-ignore
    return await this.plugActor.get_funders();
  }
}
