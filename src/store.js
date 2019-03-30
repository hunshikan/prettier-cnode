export default {
  state: {
    currentTab: 'all',
    isShowNav: document.documentElement.clientWidth >= 768,
    isWideDevice: document.documentElement.clientWidth >= 768
  },
  setCurrentTab(newValue) {
    if(!newValue) return
    this.state.currentTab = newValue
  },
  setNavShow(newValue) {
    this.state.isShowNav = newValue
  }
}