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
                  <Chip v-for="language in languages" :key="language" :label="language" class="mr-2"></Chip>
              </div>
          </li>
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
              <div class="text-500 w-6 md:w-2 font-medium">Topics</div>
              <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                  <Chip v-for="topic in repository.topics" :key="topic" :label="topic" class="mr-2"></Chip>
              </div>
          </li>
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
              <div class="text-500 w-6 md:w-2 font-medium">Stargazers</div>
              <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ repository.stargazers_count }}</div>
          </li>
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
              <div class="text-500 w-6 md:w-2 font-medium">Open Issues</div>
              <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ repository.open_issues }}</div>
          </li>
      </ul>
    <Button label="Go back" class="p-button-outlined" @click="goBack"/>
  </div>
</template>

<script>
import Chip from 'primevue/chip';
import Button from 'primevue/button';
export default {
  props: ['repoUrl'],
  data() {
    return {
      repository: 'null',
      languages: [],
    }
  },
  components: {
    Chip,
    Button,
  },
  methods: {
    goBack() {
      this.$emit('changeComponent', 'user-repos');
    }
  },
  mounted() {
    const api = this.repoUrl;
    this.axios.get(api).then(function(response) {
      return response.data;
    }).then((data) => {
      this.repository = data;

      const languages_url = data.languages_url;
      this.axios.get(languages_url).then(function(response) {
        return response.data;
      }).then((data) => {
        this.languages = Object.keys(data);
      });

    });
  }
}
</script>

<style scoped>
.surface-section {
  margin-top: 20px;
}

.mr-2 {
  margin: 2px;
}

.p-button-outlined {
  margin-top: 20px;
}
</style>