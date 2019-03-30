export default {
  state: {
    isShowNav: document.documentElement.clientWidth >= 768,
    isWideDevice: document.documentElement.clientWidth >= 768
  },
  setNavShow(newValue) {
    this.state.isShowNav = newValue
  },
  setIsWideDevice(newValue) {
    this.state.isWideDevice = newValue
  }
}