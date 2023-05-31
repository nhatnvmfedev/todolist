export default {
  name: 'ItemBlog',
  data () {
    return {
    }
  },
  components: {
  },
  props: {
    data: {
      id: Number,
      img: String,
      title: String,
      content: String
    }
  },
  computed: {
  },
  methods: {
    async handleGoToDetailBlog (id) {
      await this.$store.dispatch('getDetailBlog', id)
      await this.$router.push({ name: 'DetailBlog', params: { id: this.data.id } })
    },
    async editBlog (id) {
      await this.$store.dispatch('getDetailBlog', id)
      await this.$store.commit('isOpenEditBlog', true)
    }
  }
}
