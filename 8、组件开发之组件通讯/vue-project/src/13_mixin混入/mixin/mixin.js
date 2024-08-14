const mixin = {
  data() {
    return {
      mixinTitle: "mixin",
    };
  },
  created() {
    console.log("执行了mixin");
  },
  methods: {
    mixinBtn() {
      console.log("点击了mixin事件");
    },
  },
};

export default mixin;
