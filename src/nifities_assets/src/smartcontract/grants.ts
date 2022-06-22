import { idlFactory as GrantIDL } from './grants.did';
import { idlFactory as LedgerIDL } from './nns_ledger.did';
import PlugWallet from '../utils/PlugWallet';
import { Grant, AddGrantResult, Funder, FunderRecord } from './grantType';
export { Grant, AddGrantResult, Funder, FunderRecord } from './grantType';

/**
 * 下面注释的3行代码，演示如何从PrincipalId获取到对应的AccountId
 * 用于非自己Plug账号的转换，使用AccountId用于转账等。
 * 自己的AccountId可以直接从'window.ic.plug.sessionManager.sessionData.accountId'获取
 */
// import { Principal } from '@dfinity/principal';
// import { getAccountId } from 'utils/IC';
// const accountId = getAccountId(Principal.from('process.env.IC_PRINCIPAL_ID_GRANTS_RECEIPT'));

export default class GrantContract {
  contractAddress: string;
  plug: unknown;
  plugActor: unknown;
  ledgerContractAddress: string;
  receiptAccountID: string;

  constructor(contractAddress: string, createActor: boolean = true) {
    this.contractAddress = contractAddress;
    this.ledgerContractAddress = process.env.SMART_CONTRACT_ADDRESS_NNS_LEDGER;
    this.receiptAccountID = process.env.IC_ACCOUNT_ID_GRANTS_RECEIPT;
    this.initWallet(createActor);
  }

  async initWallet(createActor: boolean = true) {
    this.plug = new PlugWallet([
      this.contractAddress,
      this.ledgerContractAddress,
    ]);

    // console.log(
    //   // @ts-ignore
    //   `principalId: ${this.plug.principalIdStr}, accountId: ${this.plug.accountId}`
    // );

    // 有些函数不通过Actor调用，比如batchTransactions
    if (createActor) {
      // @ts-ignore
      this.plugActor = await this.plug.getActor(this.contractAddress, GrantIDL);
      // console.log(this.plugActor);
    }
  }

  async add(grant: Grant): Promise<AddGrantResult> {
    if (!this.plugActor) {
      await this.initWallet();
    }

    // @ts-ignore
    return await this.plugActor.create_crowd(grant);
  }

  async get(): Promise<Grant> {
    if (!this.plugActor) {
      await this.initWallet();
    }

    // @ts-ignore
    return await this.plugActor.get_crowd();
  }

  async fund(amount: bigint): Promise<number> {
    if (!this.plug) {
      await this.initWallet();
    }

    // console.log(`TRANSFER_ICP_TX`);
    // console.log(`receiptAccountID: ${this.receiptAccountID}`);
    // console.log(LedgerIDL);
    // console.log(this.ledgerContractAddress);

    const TRANSFER_ICP_TX = {
      idl: LedgerIDL,
      canisterId: this.ledgerContractAddress,
      methodName: 'send_dfx',
      args: [
        {
          // @ts-ignore
          to: this.receiptAccountID,
          fee: { e8s: BigInt(10000) }, // fee为固定值
          amount: { e8s: amount },
          memo: 0,
          // @ts-ignore
          from_subaccount: [], // For now, using default subaccount to handle ICP
          // @ts-ignore
          created_at_time: [],
        },
      ],
      // @ts-ignore
      onSuccess: (res) => {
        console.log('transferred ICP successfully');
      },
      // @ts-ignore
      onFail: (err) => {
        console.log('transfer ICP error', err);
      },
    };

    // console.log(`TRANSFER_XTC_TX`);
    // console.log(GrantIDL);
    // console.log(this.contractAddress);

    const TRANSFER_XTC_TX = {
      idl: GrantIDL,
      canisterId: this.contractAddress,
      methodName: 'fund',
      args: [amount],
      onSuccess: (res: unknown) => {
        // 本笔交易成功回调
        console.log('transaction fund successfully');
      },
      onFail: (err: unknown) => {
        // 本笔交易失败回调
        console.log('transaction fund error', err);
      },
    };

    // @ts-ignore
    return await this.plug.batchTransactions([
      TRANSFER_ICP_TX,
      TRANSFER_XTC_TX,
    ]);
  }

  async getFunder(): Promise<Funder> {
    if (!this.plugActor) {
      await this.initWallet();
    }

    // @ts-ignore
    return await this.plugActor.get_funder();
  }

  async getFunders(): Promise<Funder> {
    if (!this.plugActor) {
      await this.initWallet();
    }
    // @ts-ignore
    return await this.plugActor.get_funders();
  }
}
