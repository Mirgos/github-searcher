<template>
<div class="main-container">
  <InputText class="search-bar" placeholder="Type user name and press enter" type="text" v-model="login" v-on:keyup.enter="searchUsers" />
  <the-table :users="users"></the-table>
</div>  
</template>

<script>
import InputText from 'primevue/inputtext';
import TheTable from './TheTable.vue';
export default {
  data() {
    return {
      login: "",
      users: 'null',
    };
  },
  components: {
    InputText,
    TheTable,
  },
  methods: {
    searchUsers() {
      const api = this.api + "search/users?per_page=100&q=" + this.login;
      this.axios.get(api).then(function(response) {
        return response.data;
      }).then((data) => {
        this.users = data.items;
      });
    },
    rowClick(e) {
      console.log(e.data.login);
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