import React from "react";
import AccountListStore, { IAccountListStore } from "./AccountListStore";
import NFTStore, { INFTStore } from "./NFTStore";
import { observer } from 'mobx-react'

class RootStore {
    AccountListStore: IAccountListStore;
    NFTStore: INFTStore;
    constructor() {
        this.AccountListStore = new AccountListStore();
        this.NFTStore = new NFTStore();
    }
}

const storesContext = React.createContext(new RootStore());
const useLocalStore = () => React.useContext(storesContext);
export { observer, useLocalStore };