<template>
  <section class="replies" v-if="data">
    <div class="sub-header">{{data.length}} 回复</div>
    <ul>
      <li
        :class="item.ups.length >= 10 ? 'highlight-reply':''"
        :key="item.id"
        class="reply"
        v-for="(item, index) in data"
      >
        <div class="reply-info">
          <Avatar :avatar-url="item.author.avatar_url" :loginname="item.author.loginname"/>
          <span class="name">{{item.author.loginname}}</span>
          <span class="floor">{{index+1}}楼</span>
          <span class="date">{{item.create_at | formatToDuration}}</span>
          <span class="like" v-if="item.ups.length">
            <span>👍</span>
            <span>{{item.ups.length}}</span>
          </span>
        </div>
        <div class="reply-content markdown-body" v-html="item.content"></div>
      </li>
    </ul>
  </section>
</template>

<script>
import Avatar from '@/components/Avatar'
import mixin from '@/mixins/index'

export default {
  name: 'ReplyList',
  props: ['data'],
  components: {
    Avatar
  },
  mixins: [mixin]
}
</script>

<style lang="scss" scoped>
@import url('../assets/github-markdown.css');
@import '../styles/Common.scss';

$trans-green: rgba(128, 189, 1, 0.02);

.replies {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 00, 0.06);

  > ul {
    > .reply {
      padding: 16px 0 0 0;

      > .reply-info {
        font-size: 12px;
        display: flex;
        align-items: center;

        @media screen and (min-width: 768px) {
          & {
            margin: 0 $normal-padding;
          }
        }

        @media screen and (max-width: 768px) {
          & {
            margin: 0 $min-padding;
          }
        }

        > .name {
          color: $blue;
          font-weight: 900;
          margin-left: 8px;
        }

        > .floor {
          font-weight: bold;
          color: $dark-grey;
          margin-left: 12px;
        }

        > .date {
          color: $light-grey;
          margin-left: 16px;
        }

        > .like {
          margin-left: auto;
          color: $dark-grey;
        }
      }

      > .reply-content {
        padding: 0 !important;
        padding-bottom: 8px !important;
        margin: 12px 24px 0 24px !important;
        border-bottom: 1px #f7f7f7 solid;
        font-size: 14px;
        word-break: break-all;

        @media screen and (min-width: 768px) {
          & {
            margin: 12px $normal-padding 0 $normal-padding !important;
          }
        }

        @media screen and (max-width: 768px) {
          & {
            margin: 12px $min-padding 0 $min-padding !important;
          }
        }
      }

      &:last-child {
        > .reply-content {
          border-bottom: none;
        }
      }
    }

    > .highlight-reply {
      @extend .reply;
      background-color: $trans-green;
    }
  }
}
</style>
