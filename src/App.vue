<template>
  <div id="app">
    <Header/>
    <main>
      <transition name="slide">
        <NavBar class="nav-bar" v-show="shouldShowNav"/>
      </transition>
      <router-view class="content"/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import store from './store.js'

export default {
  components: {
    Header,
    NavBar
  },
  data() {
    return {
      sharedState: store.state
    }
  },
  created() {
    window.addEventListener('resize', e => {
      if (document.documentElement.clientWidth >= 768) {
        store.setNavShow(true)
        store.setIsWideDevice(true)
      } else {
        store.setNavShow(false)
        store.setIsWideDevice(false)
      }
    })
  },
  computed: {
    shouldShowNav() {
      if(!this.sharedState.isWideDevice) {
        return this.sharedState.isShowNav
      } else {
        if(this.$route.name === 'home') {
          return true;
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(250, 250, 250);

  > header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
  }

  main {
    padding-top: 0.1px;
  }

  @media screen and (min-width: 768px) {
    main {
      display: flex;
      margin-top: 64px;

      > .nav-bar {
        display: block;
        flex-shrink: 0;
      }

      > .content {
        flex-grow: 1;
        margin: 0 2%;
        margin-top: 40px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    main {
      margin-top: 42px;

      .nav-bar {
        position: fixed;
        top: 42px;
        width: 100%;
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.06);
      }

      > .content {
        flex-grow: 1;
        margin: 0 2%;
        margin-top: 40px;
      }
    }
  }

  .slide-enter-active {
    animation: slide-down 0.5s;
  }
  .slide-leave-active {
    animation: slide-down 0.5s reverse;
  }

  @keyframes slide-down {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
}

ul {
  margin: 0;
}


</style>
