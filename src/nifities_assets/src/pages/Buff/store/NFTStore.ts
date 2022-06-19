import { makeAutoObservable } from "mobx";
import PlugWallet from 'utils/PlugWallet';
import { idlFactory } from 'contract/dip721_nft_container.did'
import { message } from "antd";

const canisterIdConfig = require('api/canisterIdConfig.json');

class NFTStore {
    loading = false
    nftList: any[] = []
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async getNftList() {
        this.loading = true
        const plug = new PlugWallet([canisterIdConfig.nftCanisterId]);
        const plugActor = await plug.getActor(canisterIdConfig.nftCanisterId, idlFactory);

        //调用合约方法
        let rs = await plugActor.getMetadataForUserDip721(plug.principalIdObj);
        this.loading = false
        if (rs) {
            const arr: any[] = []
            rs.forEach((item: any) => {
                const obj = { tokeId: item.tokeId, name: '', url: '' }
                item.metadata_desc.forEach((val: any) => {
                    val.key_val_data.forEach((keyVal: any) => {
                        if (keyVal[0] === 'name') {
                            obj.name = keyVal[1].TextContent
                        }
                        if (keyVal[0] === 'location') {
                            obj.url = keyVal[1].TextContent
                        }
                    })
                })
                arr.push(obj)
            })
            this.nftList = arr
            return
        }
        message.error('get fail')
    }

    async onSubmit(values: any) {
        const imgUrl = values.image.file.response.data.url
        const plug = new PlugWallet([canisterIdConfig.nftCanisterId]);
        const plugActor = await plug.getActor(canisterIdConfig.nftCanisterId, idlFactory);
        return await plugActor.simpleMintDip721(plug.principalIdObj, imgUrl, values.image.file.type, values.itemName, "true")
    }

}

export default NFTStore;
export interface INFTStore extends NFTStore { }