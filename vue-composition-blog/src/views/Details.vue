<template lang="">
    <div class="details">
        <div v-if="error">{{ error }}</div>
        <div v-else>
            <h1>Details of {{post.title}}</h1>
            <p>{{post.body}}</p>
            <span v-for="(tag) in post.tags" :key="tag">#{{tag}}&nbsp;</span>
        </div>
    </div>
</template>
<script>
import getPost from '@/composables/getPost.js'

export default {
    props: ['id'],
    setup(props){
        const {post, error, load} = getPost(props.id)

        load()

        return { post, error }
    }
}
</script>
<style lang="">
    
</style>