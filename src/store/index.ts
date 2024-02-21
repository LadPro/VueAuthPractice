import { createStore } from 'vuex'
import Emitter from "tiny-emitter"


export default createStore({
  state: {
    jwt: "",
    error: "",
    msalInstance : {},
    emitter: new Emitter.TinyEmitter()
  },
  getters: {
  
  },
  mutations: {
    setMsalInstance(state, value){
      state.msalInstance = value
    }
  },
  actions: {
    // async login(state:any, email:string, password:string):Promise<boolean>{
    //     try{

    //         const url = "http://127.0.0.1:5000/auth"
    //         const res = await fetch(url, {
    //             method: "POST",
    //             headers:{
    //                 'Accept':'application/json',
    //                 'Content-Type':'application/json'
    //             },
    //             body: JSON.stringify({
    //                 email:email,
    //                 password: password
    //             })
    //         })
    //         const response = await res.json()
            
    //         if ('errors' in response){
    //             state.error = "login failed"
    //             return false
    //         }
    //         state.jwt = response.data.access_token
    //         return true
    //     }
    //     catch(error){
    //         console.log(error)
    //         state.error = "error en el catch"
    //         return false
    //     }
    //     }

  },
  modules: {

  }
})
