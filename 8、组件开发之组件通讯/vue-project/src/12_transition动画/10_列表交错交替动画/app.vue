<template>
    <div>
        搜索：<input type="text" v-model="keyword">
        <transition-group name="list" tag="ul" :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <li v-for="(item, index) in filterList" :key="item" :data-index="index">{{ item }}</li>
        </transition-group>
    </div>
</template>

<script>
import gsap from 'gsap';
export default {
    data() {
        return {
            keyword: "",
            list: ['abc', 'bbc', 'bac', 'kebe', 'jumas', 'cgf', 'hht']
        };
    },
    computed: {
        // 根据关键字过滤有效的值
        filterList() {
            return this.list.filter(item => {
                return item.indexOf(this.keyword) != -1;
            })
        }
    },
    methods: {
        // 初始化
        // 这里的el就是当前执行动画的dom
        beforeEnter(el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        // 进入动画
        // el.dataset: 里面包含data-定义的值
        enter(el,done) {
            gsap.to(el, {
                opacity: 1,
                height: '1.5em',
                delay: el.dataset.index * 0.1,
                onComplete: done
            })
        },
        // 离开
        leave(el, done) {
            gsap.to(el, {
                opacity: 0,
                height: 0,
                onComplete: done
            })
        }
    },
};
</script>