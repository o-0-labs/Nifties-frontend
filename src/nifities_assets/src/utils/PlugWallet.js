export default class PlugWallet {
    whitelist;
    timeout = 5000;
    publicKey;
    accountId;
    principalId;
    actor;

    constructor(whitelist) {
        this.whitelist = whitelist;
        this.timeout = 5000;
    }

    checkPlugStatus() {
        if (!window.ic) {
            const rs = confirm('You do not have a Plug wallet installed, click OK to go to the Plug website to install it.');
            if(rs) {
                window.open('https://plugwallet.ooo/', '_blank'); 
            }

            return false;
        } else {
            return true;
        }
    }

    async connect() {
        if(this.checkPlugStatus())
        {
            try {
                if(! await this.isConnected())
                {
                    this.publicKey = await window.ic.plug.requestConnect({whitelist: this.whitelist, timeout: this.timeout});
                    return this.publicKey;
                } else {
                    if(!this.principalId) {
                        this.principalId = window.ic.plug.sessionManager.sessionData.principalId;
                    }
                    if(!this.accountId) {
                        this.accountId = window.ic.plug.sessionManager.sessionData.accountId;
                    }

                    console.log(`The plug wallet is Connected, principalId: ${this.principalId}, accountId: ${this.accountId}`);
                }
            } catch (e) {
                console.log(`Plug wallet request connection failed with error message. ${e.toString()}`);
            }
        }
    }

    async isConnected() {
        return await window.ic.plug.isConnected();
    };

    async getPrincipalId() {
        if(!this.principalId)
        {
            if(! await this.isConnected())
                connect();
            
            this.principalId = await window.ic.plug.agent.getPrincipal();
        }
        return this.principalId;
    }

    async getAccountId() {
        if(!this.accountId)
        {
            if(! await this.isConnected())
                this.connect();

            this.accountId = await window.ic.plug.agent.getAccountId();
        }
        return this.accountId;
    }

    async getActor(canisterId, interfaceFactory) {
        if(!this.actor) {
            if(! await this.isConnected())
                this.connect();

            this.actor = await window.ic.plug.createActor({
                canisterId: canisterId,
                interfaceFactory: interfaceFactory
            });
        }

        return this.actor;
    }

    async batchTransactions(transactions) {
        if(! await this.isConnected())
            this.connect();

        return await window.ic.plug.batchTransactions(transactions);
    }
}