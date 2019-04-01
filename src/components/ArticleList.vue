<template>
  <div v-if="articleList">
    <ul class="article-list">
      <li :key="item.id" class="article" v-for="item in articleList">
        <router-link :to="{name: 'topic', params: {id: item.id, name: item.author.loginname}}">
          <div class="article-base-info">
            <span :class="[item.top||item.good ? 'highlight-tab':'tab']">{{item | formatTab}}</span>
            <span class="title">{{item.title}}</span>
          </div>
          <div class="article-user-info">
            <Avatar :avatar-url="item.author.avatar_url" :loginname="item.author.loginname"/>
            <span class="author-name">{{item.author.loginname}}</span>
            <span class="create-at">创建于</span>
            <span class="create-date">{{item.create_at | formatDate}}</span>
          </div>
          <div class="state-info">
            <span class="last-reply">最后回复：{{item.last_reply_at | formatDate}}</span>
            <span class="replies-and-views">
              <span class="replies">{{item.reply_count}} 回复</span>
              <span class="views">{{item.visit_count}} 阅读量</span>
            </span>
          </div>
        </router-link>
      </li>
    </ul>
    <Pagination @page-update="onPageUpdate"/>
  </div>
</template>

<script>
import fetch from '../utils/fetch'
import api from '../configs/apiConfig'
import scrollTop from '../utils/scrollTop.js'
import Avatar from '@/components/Avatar'
import Pagination from '@/components/Pagination'
import mixin from '@/mixins/index'

export default {
  name: 'ArticleList',
  data() {
    return {
      articleList: null,
      currentPage: 1,
      currentTab: this.$route.params.tab ? this.$route.params.tab : 'all'
    }
  },
  components: {
    Avatar,
    Pagination
  },
  methods: {
    getArticleList() {
      fetch(api.articleList, {
        limit: 20,
        page: this.currentPage,
        tab: this.currentTab
      }).then(res => {
        this.articleList = res.data
      })
    },
    onPageUpdate(page) {
      this.currentPage = page
      this.getArticleList()
      scrollTop(100)
    }
  },
  created() {
    this.getArticleList()
  },
  watch: {
    '$route.params.tab'(newValue, oldValue) {
      if (!newValue) return
      this.currentTab = newValue
      this.getArticleList()
      scrollTop(100)
    }
  },
  mixins: [mixin]
}
</script>

<style lang="scss" scoped>
@import '../styles/Common.scss';
.article-list {
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}

.article {
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s;

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:last-child .state-info {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  @media screen and (min-width: 768px) {
    & {
      padding: $normal-padding $normal-padding 0 $normal-padding;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      padding: $min-padding $min-padding 0 $min-padding;
    }

    .tab {
      display: none;
    }
  }

  .article-base-info {
    display: flex;
    align-items: flex-start;

    > .tab {
      flex-shrink: 0;
    }

    > .title {
      font-weight: 900;
      font-size: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: #222;
    }
  }

  .article-user-info {
    font-size: 14px;
    margin-top: 12px;
    display: flex;
    align-items: center;

    > .author-name {
      color: $blue;
      font-weight: 900;
      margin-left: 8px;
    }

    > .create-at {
      color: $light-grey;
      margin: 0 5px;
    }

    > .create-date {
      color: $light-grey;
    }

    @media screen and (max-width: 768px) {
      > .create-at,
      .create-date {
        display: none;
      }
    }
  }

  .state-info {
    margin-top: 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px #f7f7f7 solid;
    position: relative;

    > .last-reply {
      font-weight: 400;
      color: $dark-grey;
    }

    > .replies-and-views{
      margin-left: auto;
    }

    .replies {
      border-radius: 6px;
      padding: 5px 10px;
      background-color: $trans-green;
      font-weight: bold;
      color: $green;
    }

    .views {
      color: $dark-grey;
      margin-left: 16px;
      font-weight: bold;
    }

    @media screen and (max-width: 768px) {
      & {
        margin-top: 0;
      }

      > .last-reply {
        display: none;
      }

      > .replies-and-views {
        position: absolute;
        top: calc(-100% - 8px);
        right: 0;
      }
    }
  }
}
</style>
