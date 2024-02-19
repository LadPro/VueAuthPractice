class AzureService {
    private msalConfig 
    private accessToken

    constructor() {
        this.msalConfig = {
            auth: {
                clientId: "xx",
                authority: "xx"
            },
            cache: {
                cacheLocation: "localStorage"
            },
        }
        this.accessToken= ''
    }

    setAccessToken(token) {
        this.accessToken = token
        return this.accessToken
    }

    getAccessToken(){
        return this.accessToken
    }
}