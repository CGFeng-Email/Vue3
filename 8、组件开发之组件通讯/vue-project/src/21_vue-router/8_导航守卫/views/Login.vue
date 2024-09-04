<template>
    <div>
        <h3>Login</h3>
        <button @click="loginchange">登录</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        
        const loginchange = () => {
            window.localStorage.setItem('token', 'a123445');

            router.push({
                path: '/home'
            })
        }
        return {
            loginchange
        }
    }
}
</script>

<style></style>