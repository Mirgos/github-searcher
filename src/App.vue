<template>
<user-searcher>

</user-searcher>
</template>

<script>
import UserSearcher from './components/UserSearcher.vue';
export default {
  name: 'App',
  components: {
    UserSearcher,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.table {
  margin-top: 20px;
}
</style>
