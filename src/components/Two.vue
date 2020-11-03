<template>
  <div class="two">
    <h1>Two</h1>
    <img src="https://cn.vuejs.org/images/logo.png" alt="" srcset="" />
    <button @click="goBack">goBack</button>
  </div>
</template>

<script>
export default {
  name: 'Two',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.two {
  position: absolute;
}
</style>
