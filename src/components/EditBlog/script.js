import { mapState } from 'vuex'

export default {
  name: 'EditBlog',
  data () {
    return {
      getDataEditBlog: {}
    }
  },
  computed: {
    ...mapState({
      dataShowNoticeAlert: state => state.dataShowNoticeAlert,
      sttSuccess: state => state.sttSuccess,
      dataEditBlog: state => state.dataDetailBlogsSuccess
    })
  },
  methods: {
    async submitForm (id) {
      // console.log(this.title, this.content, this.createdAt)
      await this.$store.dispatch('editBlog', {id: id, data: this.dataEditBlog})
      if (this.$route.name === 'PageSearch') {
        await this.$store.dispatch('getSearchListBlogs', { search: this.$route.params.key.slice(1) })
      } else {
        await this.$store.dispatch('getListBlogs', {page: 1})
      }
      // this.$emit('hanldeCloseEditBlog')
    },
    async closeEditBlog () {
      await this.$store.commit('isOpenEditBlog', false)
      await this.$store.commit('checkAddBlogSuccess', false)
    }
  }
}
