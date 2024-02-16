<template>
    <div class="container">
        <h1>Firebase</h1>
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
    </div>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    import {getAuth, signInWithEmailAndPassword} from "firebase/auth"

    let email = ref("")
    let password = ref("")
    // let jwt:Ref<string> = ref("")
        
    const login = () =>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email.value, password.value).then(()=>{
        alert("exito")
    })
    .catch((error) => {
        alert(error)
    })
    }
    
    

</script>

<style scoped>
</style>