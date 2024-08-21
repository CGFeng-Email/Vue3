import {ref, watch} from 'vue';

export default function (key, value) {
    // 只要传递value值进来，就设置成响应式数据
    const data = ref(value);

    // 有value就是设置
    if(value) {
        // JSON.stringify: 解决传递进来数据是对象或者数组时的格式问题
        window.localStorage.setItem(key, JSON.stringify(value))
    } else {
        // 没有value就是获取
        data.value = JSON.parse(window.localStorage.getItem(key));
    }

    // 修改：
    watch(data, (newsValue) => {
        console.log('data发生变化', newsValue);
        window.localStorage.setItem(key, JSON.stringify(newsValue));
    })

    return data
}
