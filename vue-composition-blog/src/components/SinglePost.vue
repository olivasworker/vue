<template>
    <div class="single-post">
        <h2>{{ post.title }}</h2>
        <p>{{ snippet}}</p>
        <span v-for="(tag) in post.tags" :key="tag">#{{ tag }}&nbsp;</span>
        <br>
        <br>
        <router-link :to="{name: 'details', params: {id: post.id}}" >See details</router-link>
    </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + '...'
        })

        return {snippet}
    }
}
</script>
<style lang="">
    
</style>