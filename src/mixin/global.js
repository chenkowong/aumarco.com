import Vue from 'vue'
import Visitor from '@/model/visitor'

const globalMixin = {
  data() {
    return {
      loading: false,
      screenWidth: window.innerWidth,
      screenheight: null,
      current_year: 2021,
      global_font_size: '16px',
      visitor_count: null,
      register_visitor: false
    }
  },
  created() {
    this.screenheight = `${window.innerHeight - 190}px`
    if (this.screenWidth <= 480) this.global_font_size = '14px'
    else this.global_font_size = '16px'
    this._getCurrentYear()
    this._getVisitorCount()
    this.registerVisitor()
  },
  mounted() {
    const _this = this
    // 挂载window.onresize方法，监听页面宽度
    window.onresize = () => {
      return (() => _this.screenWidth = window.innerWidth)()
    }
  },
  watch: {
    screenWidth(val) {
      if (val <= 480) this.global_font_size = '14px'
      else this.global_font_size = '16px'
    }
  },
  methods: {
    async _getCurrentYear () {
      this.current_year = new Date().getFullYear()
    },
    async _getVisitorCount () {
      try {
        const res = await Visitor.getVisitorById(1)
        this.visitor_count = res.count
        // console.log(`visitors: ${this.visitor_count}`)
      } catch (error) {
        console.error(error)
      }
    },
    async registerVisitor () {
      if (sessionStorage.getItem('vis') === null) {
        // console.log('cannot search visitor')
        try {
          const visitor = returnCitySN
          await Visitor.selectVisitorByCip(visitor)
          sessionStorage.setItem('vis', JSON.stringify(visitor))
          this.register_visitor = true
          // console.warn('register visitor')
        } catch (error) {
          console.error(error)
        }
      } else {
        this.register_visitor = true
      }
    },
    // 数字过滤
    checkAddZone(num) {
      return num < 10 ? `0${num.toString()}` : num
    },
    // 日期过滤函数
    dateFormatter(nows) {
      if (!nows) return ''
      const now = new Date(nows)
      const year = now.getFullYear()

      let month = now.getMonth() + 1
      month = this.checkAddZone(month)

      let date = now.getDate()
      date = this.checkAddZone(date)
      return `${year}-${month}-${date}`
    },
  }
}

Vue.use(globalMixin)

export default  globalMixin
