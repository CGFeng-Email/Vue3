import { customRef } from 'vue';

export default function (value, delay = 300) {
    let timer = null;
    // customRef:自定义ref规定传进一个函数，两个参数，参数1-track:收集依赖，参数2：trigger：触发更新
    return customRef((track, trigger) => {
        // 规定这个函数返回一个对象
        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                // 每次设置时，清除上一次的设置
                clearTimeout(timer);
                // 设置延迟定时器
                timer = setTimeout(() => {
                    value = newValue;
                    // 触发更新
                    trigger();
                }, delay);
            }
        }
    })
}