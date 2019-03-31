<template>
  <article>
    <div class="article-info" v-if="data">
      <div class="title">{{data.title}}</div>
      <div class="other">
        <span :class="[data.top||data.good ? 'highlight-tab':'tab']">{{data | formatTab}}</span>
        <span class="author-name">{{data.author.loginname}}</span>
        <span class="create-at">发布于 {{data.create_at | formatDate}}</span>
        <span class="views">阅读量：{{data.visit_count}}</span>
      </div>
    </div>
    <div class="article-content markdown-body" id="content" v-html="data.content" v-if="data"></div>
  </article>
</template>

<script>
import Avatar from '@/components/Avatar'
import mixin from '@/mixins/index'

export default {
  name: 'Article',
  props: ['data'],
  components: {
    Avatar
  },
  mixins: [mixin]
}
</script>

<style lang="scss" scoped>
@import url('../assets/github-markdown.css');
@import "../styles/Common.scss";

$trans-blue: rgba(14, 131, 255, 0.1);

article {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);

  > .article-info {
    padding: 24px;
    border-bottom: 1px #f7f7f7 solid;

    > .title {
      font-size: 24px;
      font-weight: bold;
    }

    > .other {
      margin-top: 8px;
      font-size: 14px;

      > .author-name {
        color: $blue;
        font-weight: 900;
        margin-left: 8px;
      }

      > .create-at {
        color: $dark-grey;
        margin: 0 8px;
      }

      > .views {
        color: $dark-grey;
        font-weight: bold;
      }
    }
  }

  > .article-content {
    font-size: 15px;
    padding: 24px 24px 12px 24px;
    word-break: break-all;
  }

}
</style>
