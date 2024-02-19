import IAuth from "./IAuth"
import ICache from "./ICache"


interface IMsalConfig {
    auth: IAuth,
    cache: ICache,
}

export default IMsalConfig