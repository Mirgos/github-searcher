<template>
  <div v-if="users != 'null'">
    <h1>Click on the row to show user's repositories</h1>
    <DataTable class="table" :value="users" :rows="5" :paginator="true"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10,20,50]"
      responsiveLayout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      :rowHover="true"
      @row-click="rowClick($event)">
      <Column field="id" header="ID"></Column>
      <Column field="avatar_url" header="Avatar">
        <template #body="slotProps">
          <img :src="slotProps.data.avatar_url" :alt="slotProps.data.avatar_url"/>
        </template>
      </Column>
      <Column field="login" header="Login"></Column>
      <Column field="html_url" header="URL"></Column>
      <template #paginatorstart>
          <Button type="button" icon="pi pi-refresh" class="p-button-text" />
      </template>
      <template #paginatorend>
          <Button type="button" icon="pi pi-cloud" class="p-button-text" />
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
export default {
  emits: ['changeLogin'],
  props: ['users'],
  components: {
    DataTable,
    Column,
    Button
  },
  methods: {
    rowClick(e) {
      this.$emit('changeLogin', e);
      this.$emit('changeComponent', 'user-repos');
    }
  }
}
</script>

<style scoped>
img {
  width: 32px;
  height: 32px;
  border-radius: 10px;
}
</style>