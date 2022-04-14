<template>
  <div class="surface-section">
      <div class="font-medium text-3xl text-900 mb-3">{{ repository.name }}</div>
      <div class="text-500 mb-5">{{repository.description}}</div>
      <ul class="list-none p-0 m-0">
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
              <div class="text-500 w-6 md:w-2 font-medium">Full Name</div>
              <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ repository.full_name }}</div>
          </li>
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
              <div class="text-500 w-6 md:w-2 font-medium">Languages</div>
              <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                  <Chip label="Python" class="mr-2"></Chip>
                  <Chip label="Javascript" class="mr-2"></Chip>
                  <Chip label="Html"></Chip>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import Chip from 'primevue/chip';
export default {
  props: ['repoUrl'],
  data() {
    return {
      repository: 'null',
      languages: [],
    }
  },
  components: {
    Chip
  },
  mounted() {
    const api = this.repoUrl;
    this.axios.get(api).then(function(response) {
      return response.data;
    }).then((data) => {
      this.repository = data;
    });
  }
}
</script>

<style scoped>
.surface-section {
  margin-top: 10px;
}
</style>