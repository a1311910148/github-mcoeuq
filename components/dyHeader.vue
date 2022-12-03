<template>
  <component :is="`h${$props.level}`" />
</template>

<script>
export default {
  props: ['level'],
};
</script>
