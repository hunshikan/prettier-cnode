<template>
  <div v-if="userData">
    <section>
      <div class="sub-header">主页</div>
      <div class="user-info">
        <div class="avatar-and-name">
          <img :alt="userData.loginname" :src="userData.avatar_url" :title="userData.loginname">
          <span class="name">{{userData.loginname}}</span>
        </div>
        <div class="score">{{userData.score}} 积分</div>
        <div class="create-date">注册时间 {{userData.create_at | formatDate}}</div>
      </div>
    </section>
    <section class="recent-topics">
      <div class="sub-header">最近创建的话题</div>
      <ul>
        <li :key="item.id" v-for="item in userData.recent_topics">
          <router-link :to="{name: 'topic', params: {id: item.id, name: item.author.loginname}}">
            <Avatar :avatar-url="item.author.avatar_url" :loginname="item.author.loginname"/>
            <span class="title">{{item.title}}</span>
            <span class="date">{{item.last_reply_at | formatDate}}</span>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="recent-replies">
      <div class="sub-header">最近参与的话题</div>
      <ul>
        <li :key="item.id" v-for="item in userData.recent_replies">
          <router-link :to="{name: 'topic', params: {id: item.id, name: item.author.loginname}}">
            <Avatar :avatar-url="item.author.avatar_url" :loginname="item.author.loginname"/>
            <span class="title">{{item.title}}</span>
            <span class="date">{{item.last_reply_at | formatDate}}</span>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import mixin from '@/mixins/index'
import fetch from '@/utils/fetch'
import api from '../configs/apiConfig'
import scrollTop from '../utils/scrollTop.js'

export default {
  name: 'User',
  components: {
    Avatar
  },
  data() {
    return {
      userData: null
    }
  },
  methods: {
    getUserData() {
      fetch(`${api.user}/${this.$route.params.loginname}`).then(res => {
        this.userData = res.data
      })
    }
  },
  created() {
    this.getUserData()
  },
  watch: {
    '$route.params.loginname'() {
      this.getUserData()
      scrollTop(40)
    }
  },
  mixins: [mixin]
}
</script>

<style lang="scss" scoped>
@import '../styles/Common.scss';

section {
  background-color: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);

  > .user-info {
    padding: 24px;
    border-radius: 8px;

    > .avatar-and-name {
      > img {
        height: 54px;
        width: 54px;
        border-radius: 50%;
      }

      > .name {
        font-size: 16px;
        color: $blue;
        font-weight: bold;
        margin-left: 16px;
        vertical-align: 50%;
      }
    }

    > .score {
      font-size: 14px;
      color: $dark-grey;
      font-weight: bold;
      margin-top: 16px;
    }

    > .create-date {
      font-size: 14px;
      color: $light-grey;
      margin-top: 8px;
    }
  }
}
.recent-topics,
.recent-replies {
  margin-top: 32px;
  border-radius: 8px;
  > ul {
    > li > a {
      border-bottom: 1px solid #fafafa;
      padding: 8px 24px;
      display: flex;
      align-items: center;

      @media screen and (min-width: 768px) {
        & {
          padding: 8px $normal-padding;
        }
      }

      @media screen and (max-width: 768px) {
        & {
          padding: 8px $min-padding;

          .date {
            display: none;
          }
        }
      }

      > .title {
        margin-left: 16px;
        font-size: 14px;
        color: #222;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .date {
        margin-left: auto;
        font-size: 12px;
        color: $light-grey;
        flex-shrink: 0;
      }

      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
}
</style>