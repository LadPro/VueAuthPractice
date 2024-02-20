<template>
    <div class="content-container">
      <div class="section content-title-group">
        <h2 class="title">Welcome to the Azure AD + Storage app with Vue.js</h2>
      </div>
      <div v-if="account">
        <div class="level">
          <div class="level-item title">
            You are logged in as {{ account.name }}
          </div>
        </div>
      </div>
      <div v-else>You need to authenticate to access your Azure Storage data</div>
    </div>
  </template>

  
<script>

import { PublicClientApplication } from '@azure/msal-browser';

export default {
  name: 'HeaderBar',
  data() {
    return {
      account: undefined,
      github: 'https://github.com/cmatskas',
      twitter: 'https://twitter.com/christosmatskas',
      signin: 'https://microsoft.com',
    };
  },
  async created() {
    this.$msalInstance = new PublicClientApplication(
      this.$store.state.msalConfig,
    );
  },
  mounted() {
    const accounts = this.$msalInstance.getAllAccounts();
    if (accounts.length == 0) {
      return;
    }
    this.account = accounts[0];
    this.$emitter.emit('login', this.account);
  },
  methods: {
    async SignIn() {
      await this.$msalInstance
        .loginPopup({})
        .then(() => {
          const myAccounts = this.$msalInstance.getAllAccounts();
          this.account = myAccounts[0];
          this.$emitter.emit('login', this.account);
        })
        .catch(error => {
          console.error(`error during authentication: ${error}`);
        });
    },
    async SignOut() {
      await this.$msalInstance
        .logout({})
        .then(() => {
          this.$emitter.emit('logout', 'logging out');
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
<!-- <script lang="ts" setup>
    import { useStore } from 'vuex';

    import {PublicClientApplication} from '@azure/msal-browser'
    import { onMounted, computed } from 'vue';
    import AzureService from '@/services/AzureService';

    let account = ""
    const store = useStore()
    const msalInstance = computed(()=> store.state.msalInstance)
    const emitter = computed(()=> store.state.emitter)
    onMounted(()=>{
        const azureService = new AzureService()
        store.commit('setMsalInstance',new PublicClientApplication(azureService.getMsalConfig().value))
        // $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
    })
    
    const login = async () => {
        await msalInstance.value
            .loginPopup({})
            .then(()=>{
                const myAccount = msalInstance.value.getAllAccount()
                account = myAccount[0]
                emitter.value.emit('login', account)

            })
            .cath(error =>{
                alert ("error" + error)
            })
    }


</script> -->

<style scoped>
</style>