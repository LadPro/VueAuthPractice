import {ref, Ref} from "vue"

class AuthServiceTBE {
    private jwt:Ref<string>
    private error:Ref<string>

    constructor(){
        this.jwt = ref("")
        this.error = ref("")
    }
    
    getToken():Ref<string>{
        return this.jwt
    }

    getError():Ref<string>{
        return this.error
    }

    async login(email:string, password:string):Promise<boolean>{
        try{

            const url = "http://127.0.0.1:5000/auth"
            const res = await fetch(url, {
                method: "POST",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email:email,
                    password: password
                })
            })
            const response = await res.json()
            
            if ('errors' in response){
                this.error.value = "login failed"
                return false
            }
            this.jwt = response.data.access_token
            return true
        }
        catch(error){
            console.log(error)
            this.error.value = "error en el catch"
            return false
        }
        }

}

export default AuthServiceTBE