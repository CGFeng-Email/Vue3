<template>
    <div>
        <home></home>
        <async-category></async-category>
    </div>
</template>

<script>
// 使用import函数导入的模块，后续的webpack对其进行打包时候就会进行分包操作
import('./utils/bar.js').then(res => {
    console.log(res.sum(10, 20));
})

import Home from './Home.vue';
// 加载组件
import Loading from './Loading.vue';
// 组件加载失败后显示的组件
import ErrorDom from './ErrorDom.vue';

// 默认打包会把所有的组件都打包到index.js
// 有些情况在加载首页时，有些没使用到的组件不想被加载，因为打包规则的问题，也会一并加载
// 借用defineAsyncComponent方法，这种导入的组件是异步的，只有在使用到的时候才会加载
import { defineAsyncComponent } from 'vue';

// 第一种写法，会对Category组件单独进行打包
// const AsyncCategory = defineAsyncComponent(() => import('./Category.vue'));

// 第二种写法
const AsyncCategory = defineAsyncComponent({
    // 加载的组件
    loader: () => import('./Category.vue'),
    // 在loader导入的组件还没加载完的时候，显示的组件，一般放loading加载组件
    loadingComponent: Loading,
    // errorComponent: loader组件加载失败后显示的组件
    errorComponent: ErrorDom,
    // delay: 显示loadingComponent加载组件之前，等待多长时间
    delay: 2000,
    // 回调函数: 
    // err: 错误信息
    // retry: retry()调用会尝试重新加载
    // fail: fail()退出程序
    // attempts：记录加载的次数
    onError: function (error, retry, fail, attempts) {
        if (error.message.match(/fetch/) && attempts <= 3) {
            // 请求发生错误时，重新加载3次
            retry()
        } else {
            fail();
        }
    }
})

export default {
    components: {
        Home,
        AsyncCategory
    },
    created() {

    }
}
</script>

<style></style>