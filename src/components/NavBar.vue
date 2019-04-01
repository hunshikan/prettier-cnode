<template>
  <nav>
      <div :class="{'nav-fixed' : fixNav}" class="nav-container">
        <div class="subtitle">主题</div>
        <ul class="nav-list">
          <router-link
            :class="currentTab === item.id ? 'selected' : ''"
            :key="item.id"
            :to="{name: 'home', params: {tab: item.id}}"
            v-for="item in cnodeNav"
          >
            <li>
              <i class="material-icons grey500">{{item.icon}}</i>
              <span>{{item.name}}</span>
            </li>
          </router-link>
        </ul>
        <div class="subtitle">其他</div>
        <ul class="nav-list">
          <a :href="item.link" :key="item.link" v-for="item in otherNav">
            <li>
              <i class="material-icons grey500">{{item.icon}}</i>
              <span>{{item.name}}</span>
            </li>
          </a>
        </ul>
      </div>
  </nav>
</template>

<script>
import { cnodeTab, others } from '@/configs/navConfig'
import store from '../store.js'

export default {
  name: 'NavBar',
  data() {
    return {
      cnodeNav: cnodeTab,
      otherNav: others,
      currentTab: this.$route.params.tab ? this.$route.params.tab : 'all',
      fixNav: false
    }
  },
  watch: {
    '$route.params.tab'(newValue, oldValue) {
      if (!newValue) return
      this.currentTab = newValue
      store.setNavShow(false)
    }
  },
  mounted() {
    window.addEventListener('scroll', e => {
      if (window.scrollY > 520) {
        this.fixNav = true
      } else {
        this.fixNav = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
$trans-green: rgba(128, 189, 1, 0.1);
$hover-color: rgb(128, 189, 1);

nav {
  background-color: #fff;
  width: 280px;
  padding-top: 32px;
  padding-bottom: 16px;
  z-index: 1;
  position: relative;

  > .nav-container {
    > .subtitle {
      font-size: 14px;
      font-weight: bold;
      color: #aaa;
      padding: 6px 40px;
    }

    > .nav-list {
      > a {
        padding: 12px 24px;
        font-weight: bold;
        margin: 8px 0;
        margin-left: 16px;
        border-top-left-radius: 24px;
        border-bottom-left-radius: 24px;
        position: relative;
        display: block;
        color: #333;

        i {
          width: 24px;
          margin-right: 16px;
          vertical-align: -18%;
        }

        span {
          font-size: 15px;
          vertical-align: 10%;
        }

        &:hover,
        &.selected {
          cursor: pointer;
          background-color: $trans-green;
          transition: all 0.3s;

          i {
            color: $hover-color;
          }

          span {
            color: $hover-color;
          }

          &::after {
            content: '';
            position: absolute;
            width: 4px;
            height: 100%;
            background-color: $hover-color;
            top: 0;
            right: 0;
          }
        }
      }
    }

    @media screen and (min-width: 768px) {
      &.nav-fixed {
        position: fixed;
        width: 280px;
      }
    }
  }

}
</style>
