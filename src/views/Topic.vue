<template>
  <div class="topic">
    <main>
      <Article :data="topicData" class="article"/>
      <ReplyList :data="replyData" class="reply-list"/>
    </main>
    <UserSideBar class="side-bar"/>
  </div>
</template>

<script>
import Article from '@/components/Article'
import ReplyList from '@/components/ReplyList'
import UserSideBar from '@/components/UserSideBar'
import fetch from '@/utils/fetch'
import api from '@/configs/apiConfig'

export default {
  name: 'Topic',
  components: {
    Article,
    ReplyList,
    UserSideBar,

  },
  data() {
    return {
      topicData: null,
      replyData: null
    }
  },
  methods: {
    getTopicData() {
      fetch(`${api.topic}/${this.$route.params.id}`).then(res => {
        this.topicData = res.data
        this.replyData = res.data.replies
      })
    }
  },
  created() {
    this.getTopicData()
  },
  watch: {
    '$route.params.id'() {
      this.getTopicData()
    },
    '$route.params.name'() {
      this.getTopicData()
    }
  }
}
</script>

<style lang="scss" scoped>
.topic {
  display: flex;
  align-items: flex-start;

  > main {
    flex-grow: 1;

    > .reply-list {
      margin-top: 32px;
    }
  }

  @media screen and (min-width: 768px) {
    .side-bar {
      display: block;
      margin-left: 1%;
    }
  }

  @media screen and (max-width: 768px) {
    .side-bar {
      display: none;
    }
  }
}
</style>
