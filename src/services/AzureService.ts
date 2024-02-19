import {ref, Ref} from "vue"
import IMsalConfig from "@/Interfaces/IMsalConfig"

class AzureService {
    private msalConfig:Ref<IMsalConfig>
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
    getMsalConfig():Ref<IMsalConfig>{
        return this.msalConfig
    }
}

export default AzureService