import { makeAutoObservable } from "mobx";

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

  async creatConnect() {
    try {
      // @ts-ignore
      const connected = await window?.ic?.plug?.isConnected();
      if (!connected) {
        console.log(11)
        // @ts-ignore
        const publicKey = await window.ic.plug.requestConnect();
        console.log(`The connected user's public key is:`, publicKey);
      } else {
        console.log('connect success!')
      }
    } catch (e) {
      console.log(e);
    }
  }

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
    const NNSUiActor = await window.ic.plug.createActor({
      canisterId: nnsCanisterId,
      interfaceFactory: nnsPartialInterfaceFactory,
    });

    // We can use any method described in the Candid (IDL)
    // for example the get_stats()
    // See https://github.com/dfinity/nns-dapp/blob/cd755b8/canisters/nns_ui/nns_ui.did
    const stats = await NNSUiActor.get_stats();
    console.log('NNS stats', stats);
  }

  async getData() {

  }
}
export default new GlobalStore();