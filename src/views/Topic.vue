<template>
  <div class="topic clearfix">
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
  padding-right: 300px;
}

main {
  float: left;
}

.article,
.reply-list {
  margin: 0 2%;
}

.side-bar {
  width: 300px;
  height: 100%;
  float: left;
  margin-left: calc(-300px - 1%);
  position: relative;
  right: -300px;
  margin-top: 40px;
}

.clearfix::after {
  display: block;
  content: '';
  clear: both;
}
</style>
