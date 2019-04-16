<template>
  <div>
    <ul class="pagination">
      <li class="prev-next">
        <a @click.prevent="onItemClick" id="prev">上一页</a>
      </li>
      <li :key="page" class="num" v-for="page in pages">
        <a :class="page === current?'highlight':''" @click.prevent="onItemClick(page)">{{page}}</a>
      </li>
      <li class="prev-next">
        <a @click.prevent="onItemClick" id="next">下一页</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      current: 1
    }
  },
  computed: {
    pages() {
      let c = this.current
      if (c <= 5) {
        return [1, 2, 3, 4, 5, 6, 7, 8, '...']
      } else {
        return [1, '..', c - 2, c - 1, c, c + 1, c + 2, c + 3, '...']
      }
    }
  },
  methods: {
    onItemClick(page) {
      if (typeof page !== 'number' && typeof page !== 'string') {
        if (page.currentTarget.id === 'next') {
          this.current++
        } else {
          this.current > 1 ? this.current-- : 1
        }
      } else {
        if (page !== '...' && page !== '..' && page !== this.current) {
          this.current = page
        } else {
          return
        }
      }
      this.$emit('page-update', this.current)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  > li {
    display: inline-block;
    background-color: #fff;

    &.prev-next {
      border-radius: 16px;
      padding: 0 16px;
    }

    &:nth-child(2) {
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
    }

    &:nth-last-child(2) {
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
    }

    &:first-child {
      margin-right: 12px;
    }

    &:last-child {
      margin-left: 12px;
    }

    > a {
      display: inline-block;
      padding: 8px 0;
      text-align: center;
      min-width: 36px;
      font-size: 14px;
      cursor: pointer;
      color: #444;
      user-select: none;
      font-weight: bold;
    }

    > a.highlight {
      color: #80bd01;
    }
  }
}
</style>