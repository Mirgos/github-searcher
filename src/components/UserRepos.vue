<template>
  <div>
    <h1>Click on repository for details</h1>
    <DataTable class="table" :value="repos" :rows="5" :paginator="true"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10,20,50]"
      responsiveLayout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      :rowHover="true"
      @row-click="rowClick($event)">
      <Column field="name" header="Name"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="language" header="Language"></Column>
      <Column field="watchers_count" header="Watchers"></Column>
      <template #paginatorstart>
          <Button type="button" icon="pi pi-refresh" class="p-button-text" />
      </template>
      <template #paginatorend>
          <Button type="button" icon="pi pi-cloud" class="p-button-text" />
      </template>
    </DataTable>
    <Button label="Go back" class="p-button-outlined" @click="goBack"/>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
export default {
  props: ['login'],
  emits: ['changeRepoUrl'],
  components: {
    DataTable,
    Column,
    Button
  },
  data() {
    return {
      repos: 'null',
    };
  },
  methods: {
    rowClick(e) {
      this.$emit('changeRepoUrl', e);
      this.$emit('changeComponent', 'repository-detail');
    },
    goBack() {
      this.$emit('changeComponent', 'users-table');
    }
  },
  mounted() {
    const api = this.api + "users/" + this.login + "/repos";
    this.axios.get(api).then(function(response) {
      return response.data;
    }).then((data) => {
      this.repos = data;
    });
  }
}
</script>

<style scoped>
.p-button-outlined {
  margin-top: 20px;
}
</style>