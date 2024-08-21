import { ref, watch } from "vue";

export default function (title = "默认值") {
    // 生成响应式数据，并且把这个变量返回
    const titleRef = ref(title);
    
    // 只要titleRef发生改变，就更新标题，通过使用immediate一开始就执行一次，可以设置默认值
    watch(
        titleRef,
        (newValue) => {
            document.title = newValue;
        },
        {
            immediate: true,
        }
    );

    return titleRef;
}
