export default {
    // 必须要有install这个放回函数
    install(app) {
        // app是全局属性，向全局属性添加一个$name属性
        app.config.globalProperties.$name = 'james';
    }
}