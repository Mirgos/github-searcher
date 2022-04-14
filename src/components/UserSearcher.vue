<template>
<div class="main-container">
  <InputText class="search-bar" placeholder="Type user name and press enter" type="text" v-model="login" v-on:keyup.enter="searchUsers" />
  <component :is="currentComponent" :users="users" 
    @changeLogin="changeLogin" @changeRepoUrl="changeRepoUrl" @changeComponent="changeComponent" :login="selectedLogin" :repoUrl="repoUrl">
  </component>
</div>  
</template>

<script>
import InputText from 'primevue/inputtext';
import UsersTable from './UsersTable.vue';
import UserRepos from './UserRepos.vue';
import RepositoryDetail from './RepositoryDetail.vue';
export default {
  data() {
    return {
      login: "",
      selectedLogin: "",
      users: 'null',
      currentComponent: 'users-table',
      repoUrl: "",
    };
  },
  components: {
    InputText,
    UsersTable,
    UserRepos,
    RepositoryDetail
  },
  methods: {
    searchUsers() {
      const api = this.api + "search/users?per_page=100&q=" + this.login;
      this.axios.get(api).then(function(response) {
        return response.data;
      }).then((data) => {
        this.users = data.items;
      });
      this.currentComponent = 'users-table';
    },
    changeLogin(e) {
      this.selectedLogin = e.data.login;
    },
    changeRepoUrl(e) {
      this.repoUrl = e.data.url;
    },
    changeComponent(component) {
      this.currentComponent = component;
    }
  },
}
</script>

<style scoped>
.search-bar {
  margin: auto;
  display: block;
  width: 400px;
}


.main-container {
  width: 800px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>