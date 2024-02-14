<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
    
            <button type="submit" class="btn btn-primary" @click="login(email, password)">Login</button>
    
        </form>
    </div>
</template>

<script lang="ts" setup>
    import { ref, Ref } from "vue";
    import AuthServiceTBE from "@/services/AuthServiceTBE"

    const email = ref("")
    const password = ref("")
    const auth = new AuthServiceTBE
    let jwt:Ref<string> = ref("")

    const login = async (email:string, password:string) =>{
        let response = await auth.login(email, password)
        
        if (await response){
            jwt = auth.getToken()
        }
        else{
            jwt = auth.getError()
        }
        
        console.log(await jwt)
    }
    
</script>

<style scoped>
</style>