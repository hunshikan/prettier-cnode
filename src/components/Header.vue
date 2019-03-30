<template>
  <header>
    <router-link :to="{name: 'home', params: {tab: 'all'}}">
      <img alt="CNode Logo" class="logo" src="@/assets/logo.svg">
    </router-link>
    <i
      @click="onMenuClick"
      class="material-icons grey500 menu-button"
    >{{sharedState.isShowNav ? 'close' : 'menu'}}</i>
  </header>
</template>

<script>
import store from '../store.js'

export default {
  name: 'Header',
  data() {
    return {
      sharedState: store.state
    }
  },
  methods: {
    onMenuClick() {
      this.sharedState.isShowNav = !this.sharedState.isShowNav
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 8px 30px;
  border-bottom: 2px solid #eee;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  .menu-button {
    cursor: pointer;
  }
}

@media screen and (min-width: 768px) {
  header {
    .logo {
      width: 48px;
      height: 48px;
    }

    .menu-button {
      display: none;
    }
  }
}

@media screen and (max-width: 768px) {
  header {
    .logo {
      width: 36px;
      height: 36px;
    }

    .menu-button {
      display: inline-block;
    }
  }
}
</style>
