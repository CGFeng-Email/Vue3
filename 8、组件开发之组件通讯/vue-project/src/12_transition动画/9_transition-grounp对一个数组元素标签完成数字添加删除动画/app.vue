<template>
    <div>
        <button @click="addBtn">添加</button>
        <button @click="removeBtn">删除</button>
        <button @click="sortBtn">洗牌，重新排序</button>

        <!-- tag:规定用什么标签包裹里面的元素 -->
        <!-- 当添加，删除时，其它的组件会闪动，并没有动画：使用v-move属性 -->
        <transition-group tag="div">
            <!-- 元素是inline，无法针对inline做动画 -->
            <span v-for="(item) in list" :key="item" class="text">
                {{ item }}
            </span>
        </transition-group>
    </div>
</template>

<script>
// 导入lodash洗牌插件
import _ from 'lodash';
export default {
    data() {
        return {
            list: [0, 1, 2, 3, 4, 5]
        };
    },
    methods: {
        addBtn() {
            this.list.splice(this.randomIndex(), 0, this.list.length)
        },
        removeBtn() {
            this.list.splice(this.randomIndex(), 1)
        },
        // 随机数
        randomIndex() {
            // Math.floor(): 不要小数
            return Math.floor(Math.random() * this.list.length);
        },
        // 借用lodash洗牌插件，对数组重新排序重组
        sortBtn() {
            this.list = _.shuffle(this.list);
        }
    },
};
</script>

<style scoped>
.text {
    margin-top: 30px;
    display: inline-block;
    padding: 0 10px;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.v-enter-active,
.v-leave-active {
    transition: all 1s ease;
}

/* 解决添加时，其它组件的闪烁没有动画跳跃 */
.v-move {
    transition: all 1s ease;
}

/* 定义离开动画：解决删除组件时其它组件会往左缩进闪烁没有动画问题，是因为删除的组件在执行动画时，是占据着位置的 */
.v-leave-active {
    /* 这样就脱离了文本流 */
    position: absolute; 
}
</style>
