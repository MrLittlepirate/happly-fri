<template>
  <div class="home_container">
    <div>
        <span>{{ msg }}</span>
        <button @click="nextHandle"></button>
        <router-link to="/item/foo">动态路由匹配</router-link>
    </div>
    <Item-Container father-component = "home"></Item-Container>
  </div>
</template>

<script>
import ItemContainer from '@/components/ItemContainer'

export default {
    name: 'home',
    data() {
        return {
            msg : 'Home Page'
        }
    },
    components: {
        ItemContainer
    },
    created() {

    },
    methods: {
        nextHandle() {
            this.$router.push('Item')
        }
    }
}
</script>

<style lang="less">
    .home_container {

    }
</style>
