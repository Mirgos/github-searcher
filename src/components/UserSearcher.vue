<template>
<div class="main-container">
  <InputText class="search-bar" placeholder="Type user name and press enter" type="text" v-model="login" v-on:keyup.enter="searchUsers" />
  <component :is="currentComponent" :users="users" @rowClick="rowClick" :login="selectedLogin"></component>
</div>  
</template>

<script>
import InputText from 'primevue/inputtext';
import UsersTable from './UsersTable.vue';
import UserRepos from './UserRepos.vue';
export default {
  data() {
    return {
      login: "",
      selectedLogin: "",
      users: 'null',
      currentComponent: 'users-table',
    };
  },
  components: {
    InputText,
    UsersTable,
    UserRepos
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
    rowClick(e) {
      this.selectedLogin = e.data.login;
      console.log(e.data.login);
      this.currentComponent = 'user-repos';
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