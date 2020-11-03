<template>
  <div class="one">
    <h1>One</h1>
    <img src="https://cn.vuejs.org/images/logo.png" alt="" srcset="" />
    <button @click="onToTwo">To Two</button>
  </div>
</template>

<script>
export default {
  name: 'One',
  methods: {
    onToTwo() {
      this.$router.push({
        name: 'Two',
        params: {
          routerType: 'push'
        }
      });
    }
  }
};
</script>

<style>
.one {
  position: absolute;
}
</style>
