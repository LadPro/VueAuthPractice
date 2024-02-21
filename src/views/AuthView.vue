<template>
    <div class="container">
        <h1>Login normal</h1>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="input" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
    
            <button type="submit" class="btn btn-primary" @click.prevent="login()">Login</button>
    
        </form>
        <h1>{{ jwt }}</h1>
    </div>
</template>

<script lang="ts" setup>
    import { ref, Ref } from "vue";
    import AuthServiceTBE from "@/services/AuthServiceTBE"


    let email = ref("")
    let password = ref("")
    let jwt:Ref<string> = ref("")


        const login = async () =>{
            const auth = new AuthServiceTBE()
            const response = await auth.login(email.value, password.value)
            console.log(response)
        
        if (response){
            jwt = auth.getToken()

        }
        else{
            jwt = auth.getError()
        }
        
        console.log(jwt.value)
    }
    
</script>

<style scoped>
</style>