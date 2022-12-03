<template>
  <div class="container">
    <h1>列表页</h1>
    <!-- {{$route}} -->
    <div>
      <div v-for="(item, index) in list" :key="item" class="list_item">
        <div style="width: 5%; text-align: center">{{ index + 1 }}</div>
        <div style="width: 60%; text-align: start; margin-left: 2em">
          {{ item.file_name }}
        </div>
        <div style="width: 20%; text-align: center; margin-left: 2em">
          {{ item.file_cate }}
        </div>
        <div style="width: 15%; text-align: center; margin-left: 2em">
          {{ new Date(item.file_uploadTime / 1).getDate() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const user_id = route.params.id;
// id file_name file_uploadTime file_size file_cate
const { data: list } = await useFetch('/api/goods');
</script>

<style>
.container h1 {
}
.list_item {
  display: flex;
  align-items: center;
  padding: 3px 0;
  cursor: pointer;
}
.list_item:hover {
  background-color: #ccc;
}
</style>
