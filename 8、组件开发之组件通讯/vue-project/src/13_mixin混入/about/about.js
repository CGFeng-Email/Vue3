export const aboutMixin = {
    data() {
        return {
            aboutMixinTitle: 'aboutMixinTitle',
        }
    },
    created() {
        console.log('执行了aboutMixinTitle');
    },
    methods: {
        aboutMixinBtn() {
            console.log('点击了aboutMixinBtn');
        }
    }
}