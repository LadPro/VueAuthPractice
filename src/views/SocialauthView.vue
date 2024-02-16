<template>
    <div class="container">
        <h1>Social login</h1>
    
        <button class="btn btn-primary" @click="loginGoogle()">Gogle</button>
        <button class="btn btn-primary" @click="loginTwitter()">X</button>
        <button class="btn btn-primary" @click="loginGithub()">GitHub</button>
    
    </div>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider  } from "firebase/auth";


    
    const loginGoogle = () =>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth()
        signInWithPopup(auth, provider)
        .then((result:any)=>{
            const credentials = GoogleAuthProvider.credentialFromResult(result)
            console.log(result)
            const token = credentials
            alert("exito")
        })
        .catch((error) => {
        console.log(error)
    })
    }
    
    const loginTwitter = () =>{
        const provider = new TwitterAuthProvider ();
        const auth = getAuth()
        signInWithPopup(auth, provider)
        .then((result:any)=>{
            const credentials = TwitterAuthProvider.credentialFromResult(result)
            console.log(result)
            const token = credentials
            alert("exito")
    })
    .catch((error) => {
        console.log(error)
    })
    }
    const loginGithub= () =>{
        const provider = new GithubAuthProvider ();
        const auth = getAuth()
        signInWithPopup(auth, provider)
        .then((result:any)=>{
            const credentials = GithubAuthProvider.credentialFromResult(result)
            console.log(result)
            const token = credentials
            alert("exito")
    })
    .catch((error) => {
        console.log(error)
    })
    }
    
    

</script>

<style scoped>
</style>