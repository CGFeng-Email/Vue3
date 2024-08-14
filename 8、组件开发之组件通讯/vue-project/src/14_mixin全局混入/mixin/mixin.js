const mixinData = {
  data() {
    return {
      mixinTitle: "全局mixinTitle",
    };
  },
  created() {
    console.log("全局混入");
  },
  methods: {},
  watch: {},
  computed: {}
};

export default mixinData;
