<template>
  <aside>
    <section>
      <div class="sub-header">作者</div>
      <div class="user-info">
        <div class="avatar-and-name">
          <Avatar :avatar-url="userData.avatar_url" :loginname="userData.loginname"/>
          <span class="name">{{userData.loginname}}</span>
        </div>
        <div class="score">{{userData.score}} 积分</div>
      </div>
    </section>
    <section class="recent-topics" v-if="userData.recent_topics.length">
      <div class="sub-header">作者最近创建话题</div>
      <ul>
        <li :key="item.id" v-for="item in recentTopics">
          <router-link
            :to="{name: 'topic', params: {id: item.id, name: item.author.loginname}}"
          >
            <span class="title">{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="recent-replies" v-if="userData.recent_replies.length">
      <div class="sub-header">作者最近回复话题</div>
      <ul>
        <li :key="item.id" v-for="item in recentReplies">
          <router-link :to="{name: 'topic', params: {id: item.id, name: item.author.loginname}}">
            <span class="title">{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import fetch from '../utils/fetch'
import api from '../configs/apiConfig'
import Avatar from '@/components/Avatar'

export default {
  name: 'UserSideBar',
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
      fetch(`${api.user}/${this.$route.params.name}`).then(res => {
        this.userData = res.data
      })
    }
  },
  created() {
    this.getUserData()
  },
  computed: {
    recentTopics() {
      return this.userData.recent_topics.slice(0, 5)
    },
    recentReplies() {
      return this.userData.recent_replies.slice(0, 5)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/Common.scss';

aside {
  width: 300px;
}

section {
  background-color: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  margin: 0 2%;
  border-radius: 6px;

  > .user-info {
    padding: 12px 24px;

    > .avatar-and-name {
      > .name {
        font-size: 16px;
        color: $blue;
        font-weight: bold;
        margin-left: 8px;
        vertical-align: 50%;
      }
    }

    > .score {
      font-size: 14px;
      color: $dark-grey;
      font-weight: bold;
      margin-top: 12px;
    }
  }
}

.recent-topics,
.recent-replies {
  margin-top: 24px;
  padding-bottom: 16px;

  > ul {

    > li > a {
      border-bottom: 1px solid #fafafa;
      padding: 8px 24px;
      display: flex;
      overflow: hidden;

      > .title {
        font-size: 13px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
}
</style>
