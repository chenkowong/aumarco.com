import Vue from 'vue'
import axios from 'axios'
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
      console.log('call vis', sessionStorage.getItem('vis'))
      if (sessionStorage.getItem('vis') === null) {
        console.log('not vis')
        // console.log('cannot search visitor')
        try {
          const res = await axios.get('https://ipapi.co/json/')
          console.log('res', res)
          if (res.status === 200) {
            const visitor = {
              cid: res.data.country,
              cip: res.data.ip,
              lat: res.data.latitude,
              lon: res.data.longitude,
              cname: `${res.data.country_name} ${res.data.region} ${res.data.city}`,
              ...res.data
            }
            await Visitor.selectVisitorByCip(visitor)
            sessionStorage.setItem('vis', JSON.stringify(visitor))
            this.register_visitor = true
          }

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
      const regTime = nows.replace(/\-/g, "/") // 修正IOS系统网页上时间显示Nan问题
      const now = new Date(regTime)
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
