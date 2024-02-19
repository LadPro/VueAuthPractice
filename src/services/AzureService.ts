import {ref, Ref} from "vue"

class AzureService {
    private msalConfig:Ref<xxxxx>
    private accessToken:Ref<string>

    constructor() {
        this.msalConfig = ref({
            auth: {
                clientId: "xx",
                authority: "xx"
            },
            cache: {
                cacheLocation: "localStorage"
            },
        })
        this.accessToken= ref('')
    }

    setAccessToken(token:string):Ref<string> {
        this.accessToken.value = token
        return this.accessToken
    }

    getAccessToken():Ref<string>{
        return this.accessToken
    }
    getMsalConfig():Ref<yyyy>{
        return this.msalConfig
    }
}

export default AzureService