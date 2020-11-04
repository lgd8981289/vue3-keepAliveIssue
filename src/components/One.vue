<template>
  <div class="one">
    <h1>A</h1>
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
