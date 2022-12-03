<template>
  <div>
    <message message="欢迎来到关于用户页面" />
    user页面
    {{ route }}<br />
    {{ id }}<br />
    {{ user_id }}<br />
    {{ res }}<br />
  </div>
</template>
<!-- 
<script>
export default {
  data() {
    return {
      data_id: this.$route.params.id,
    };
  },
  created() {
    // const { data: count } = await useFetch(
    //   'https://nodeq18xep-hsdt--3000.local-credentialless.webcontainer.io/user'
    // );
    // console.log(count);
    // this.count = count;
    console.log(this.data_id);
    this.id = this.$route.params.id;
  },
  mounted() {
    console.log(this.id);
  },
};
</script> -->
<script setup>
definePageMeta({
  pageTransition: {
    name: 'rotate',
  },
});
const route = useRoute();
const user_id = route.params.id;
const { data: res } = await useFetch('/');
console.log(res);
</script>
