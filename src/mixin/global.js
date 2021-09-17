import Vue from 'vue'
import Visitor from '@/model/visitor'

const globalMixin = {
  data() {
    return {
      loading: false,
      screenheight: null,
      visitor_count: null,
      register_visitor: false
    }
  },
  created() {
    this.screenheight = `${window.innerHeight - 190}px`
    // console.log(this.screenheight)
    this._getVisitorCount()
    this.registerVisitor()
  },
  methods: {
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
    }
  }
}

Vue.use(globalMixin)

export default  globalMixin
