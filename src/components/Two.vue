<template>
  <div class="two">
    <h1>B</h1>
    <button @click="goBack">goBack</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Two',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    axios.get('https://cn.vuejs.org/images/logo.png');
  }
};
</script>
<style>
.two {
  position: absolute;
}
</style>
