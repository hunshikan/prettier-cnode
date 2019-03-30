<template>
  <router-link :to="{name: 'user', params: {loginname}}">
    <img :alt="loginname" :src="avatarUrl" :title="loginname">
  </router-link>
</template>

<script>
export default {
  name: 'Avatar',
  props: ['avatar-url', 'loginname']
}
</script>

<style lang="scss" scoped>
img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

a {
  width: 30px;
  height: 30px;
}
</style>