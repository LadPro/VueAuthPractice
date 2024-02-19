<template>
    <div>
        <h1>Login con Azure</h1>
        <button class="btn btn-primary" @click="login()">GitHub</button>
    </div>
</template>

<script lang="ts" setup>
    import {PublicClientApplication} from '@azure/msal-browser'
    import { onMounted } from 'vue';
    import AzureService from '@/services/AzureService';

    let account = ""
    
    onMounted(()=>{
        const azureService = new AzureService()
        $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
    })
    
    const login = async () => {
        await $msalInstance
            .loginPopup({})
            .then(()=>{
                const myAccount = $msalInstance.getAllAccount()
                account = myAccount[0]
                $emitter.emit('login', account)

            })
            .cath(error =>{
                alert ("error" + error)
            })
    }


</script>

<style scoped>
</style>