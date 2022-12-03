<template>
  <div>
    <div v-if="isShow">
      您好，您有一条消息：{{ message }}
      <button @click="isShow = false">x</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
