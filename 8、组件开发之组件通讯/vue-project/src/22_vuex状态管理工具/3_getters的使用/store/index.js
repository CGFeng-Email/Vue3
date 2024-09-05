import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            books: [
                {
                    name: '白夜行',
                    id: 1,
                    counter: 5,
                    price: 10
                },
                {
                    name: '老人与海',
                    id: 2,
                    counter: 3,
                    price: 15
                },
                {
                    name: '活着',
                    id: 3,
                    counter: 5,
                    price: 20
                }
            ],
            booksDisCount: 0.9, // 书籍折扣比例
            name: 'james',
            age: 18
        }
    },
    getters: {
        // books书籍总价格，getters第二个参数：可以调用其他的getters函数
        totalBooksPrice(state, getters) {
            let totalPrice = 0;
            for (const book of state.books) {
                totalPrice += book.counter * book.price
            }

            return totalPrice * getters.booksDisCount
        },
        // 书籍折扣比例
        booksDisCount(state) {
            return state.booksDisCount
        },
        // getters函数也可以接受参数
        filterBooksPrice(state, getters) {
            // n:外部传递过来的参数，这里的逻辑是计算书籍价格大于10的总价格
            return function (n) {
                console.log(n);
                let totalPrice = 0;
                for (const book of state.books) {
                    // continue：跳过这个循环,直接进行下一次循环
                    if (book.price <= n) continue
                    totalPrice += book.counter * book.price
                }

                // 再计算一下折扣
                return totalPrice * getters.booksDisCount
            }
        },
        nameInfo(state) {
            return 'name:' + state.name
        },
        ageInfo(state) {
            return 'age:' + state.age
        }
    }
})

export default store