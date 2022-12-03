<template>
  <div>
    <dyHeader level="2" textContent="标题" style="text-align: center" />
    <message message="欢迎来到首页" />
    首页1
  </div>
</template>

<script>
export default {
  setup() {
    let list = ref(null);
    const appConfig = useAppConfig();
    console.log(appConfig);
    useFetch('/api/goods').then((res) => {
      list.value = res.data;
    });
    return { list };
  },
  created() {},
};
</script>
