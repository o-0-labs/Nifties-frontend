export default class PlugWallet {
    publicKey;
    accountId;
    principalId;
    principalIdObj;
    actor;

    constructor(whitelist) {
        this.connect({
            whitelist,
            timeout: 5000
        })
    }

    checkPlugStatus() {
        if (!window.ic) {
            const rs = confirm('You do not have a Plug wallet installed, click OK to go to the Plug website to install it.');
            if (rs) {
                window.open('https://plugwallet.ooo/', '_blank');
            }
            return false;
        } else {
            return true;
        }
    }

    async connect(params) {
        if (this.checkPlugStatus()) {
            try {
                if (! await this.isConnected()) {
                    this.publicKey = await window.ic.plug.requestConnect(params);
                }
                if (!this.principalId) {
                    this.principalId = window.ic.plug.sessionManager.sessionData.principalId;
                }
                if (!this.accountId) {
                    this.accountId = window.ic.plug.sessionManager.sessionData.accountId;
                }
                if (!this.principalIdObj) {
                    this.principalIdObj = await window.ic.plug.sessionManager.sessionData.agent.getPrincipal();
                }
                console.log(`The plug wallet is Connected, principalId: ${this.principalId}, accountId: ${this.accountId}`);
            } catch (e) {
                console.log(`Plug wallet request connection failed with error message. ${e.toString()}`);
            }
        }
    }

    async isConnected() {
        return await window.ic.plug.isConnected();
    };

    async getActor(canisterId, interfaceFactory) {
        if (!this.actor) {
            // if (! await this.isConnected())
            //     this.connect();
            this.actor = await window.ic.plug.createActor({
                canisterId: canisterId,
                interfaceFactory: interfaceFactory
            });
        }
        return this.actor;
    }

    async batchTransactions(transactions) {
        if (! await this.isConnected())
            this.connect();

        return await window.ic.plug.batchTransactions(transactions);
    }
}