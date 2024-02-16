<template>
    <div class="container">
        <h1>Social login</h1>
    
        <button class="btn btn-primary" @click="loginGoogle()">Gogle</button>
    
    </div>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


    const provider = new GoogleAuthProvider();
        
    const loginGoogle = () =>{
        const auth = getAuth()
        signInWithPopup(auth, provider).then(()=>{
        alert("exito")
    })
    .catch((error) => {
        console.log(error)
    })
    }
    
    

</script>

<style scoped>
</style>