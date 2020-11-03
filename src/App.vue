<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <keep-alive :include="virtualTaskStack">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: '',
      virtualTaskStack: [],
      once: false
    };
  },
  watch: {
    $route(to, from) {
      if (!this.once) {
        this.once = true;
        this.virtualTaskStack.push(to.name);
        return;
      }
      const routerType = to.params.routerType;
      if (routerType === 'push') {
        this.virtualTaskStack.push(to.name);
        this.transitionName = 'fold-left';
      } else {
        const index = this.virtualTaskStack.findIndex((name) => name === to.name);

        if (index != -1) {
          this.virtualTaskStack.splice(index, 1);
        }
        this.transitionName = 'fold-right';
      }
    }
  }
};
</script>

<style scoped>
.fold-left-enter-active {
  animation-name: fold-left-in;
  animation-duration: 0.4s;
}
.fold-left-leave-active {
  animation-name: fold-left-out;
  animation-duration: 0.4s;
}
@keyframes fold-left-in {
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes fold-left-out {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

.fold-right-enter-active {
  animation-name: fold-right-in;
  animation-duration: 0.4s;
}
.fold-right-leave-active {
  animation-name: fold-right-out;
  animation-duration: 0.4s;
}
@keyframes fold-right-in {
  0% {
    width: 100%;
    transform: translate(-100%, 0);
  }
  100% {
    width: 100%;
    transform: translate(0, 0);
  }
}
@keyframes fold-right-out {
  0% {
    width: 100%;
    transform: translate(0, 0);
  }
  100% {
    width: 100%;
    transform: translate(100%, 0);
  }
}
</style>
