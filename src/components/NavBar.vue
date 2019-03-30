<template>
  <nav>
    <div class="subtitle">主题</div>
    <ul class="nav-list">
      <router-link
        :key="item.id"
        :to="{name: 'home', params: {tab: item.id}}"
        v-for="item in navList"
      >
        <li>
          <i class="material-icons grey500">{{item.icon}}</i>
          <span>{{item.name}}</span>
        </li>
      </router-link>
    </ul>
    <div class="subtitle">其他</div>
  </nav>
</template>

<script>
import navConfig from '@/configs/navConfig'
import store from '../store.js'

export default {
  name: 'NavBar',
  data() {
    return {
      navList: navConfig,
      currentTab: '',
    }
  }
}
</script>

<style lang="scss" scoped>
$trans-green: rgba(128, 189, 1, 0.1);
$hover-color: rgb(128, 189, 1);

nav {
  background-color: #fff;
  width: 280px;
  padding-top: 40px;

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
}
</style>
