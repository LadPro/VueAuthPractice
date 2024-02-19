<template>
    <div>
        <h1>Login con Azure</h1>
    </div>
</template>

<script lang="ts" setup>
    import {PublicClientApplication} from '@azure/msal-browser'
    import { onMounted } from 'vue';
    import AzureService from '@/services/AzureService';

    const account = ""
    
    onMounted(()=>{
        const azureService = new AzureService()
        $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
    })
    
    const login = async () => {
        await $msalInstace
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