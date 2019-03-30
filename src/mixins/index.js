import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

export default {
  filters: {
    formatToDuration(dateStr) {
      return dayjs(new Date(dateStr)).fromNow()
    },
    formatDate(dateStr) {
      return dayjs(new Date(dateStr)).format('YYYY年MM月DD日')
    },
    formatTab(article) {
      if (article.good === true) {
        return '精华'
      } else if (article.top === true) {
        return '置顶'
      } else if (article.tab === 'ask') {
        return '问答'
      } else if (article.tab === 'share') {
        return '分享'
      } else if (article.tab === 'job') {
        return '招聘'
      } else if (article.tab === 'dev') {
        return '测试'
      } else {
        return '其他'
      }
    }
  }
}
