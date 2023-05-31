import { mapState } from 'vuex'

export default {
  name: 'AddBlog',
  data () {
    return {
      dataAddBlog: {
        title: null,
        content: null,
        createdAt: new Date()
      }
    }
  },
  computed: {
    ...mapState({
      dataShowNoticeAlert: state => state.dataShowNoticeAlert,
      sttSuccess: state => state.sttSuccess
    })
  },
  methods: {
    async submitForm () {
      // console.log(this.title, this.content, this.createdAt)
      await this.$store.dispatch('addBlog', this.dataAddBlog)
      // this.$emit('hanldeCloseAddBlog')
    },
    closeAddBlog () {
      this.$emit('hanldeCloseAddBlog')
      this.$store.commit('checkAddBlogSuccess', false)
    }
  }
}
