<template>
  <div class="home_container">
    <h1>{{ msg }}</h1>
    <span>itemId = {{ $route.params.id }}</span>
    <router-link to="/">返回home</router-link>

    <Item-Container father-component = "item"></Item-Container>
  </div>
</template>

<script>
import ItemContainer from '@/components/ItemContainer'

export default {
    name: 'item',
    data() {
        return {
            msg : 'item Page'
        }
    },
    components: {
        ItemContainer
    },
    created() {
        // 进入题目页面，开始计时
        
    }
}
</script>

<style lang="less">
</style>
