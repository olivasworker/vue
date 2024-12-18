<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <button @click="showPosts = !showPosts">Toggle Posts</button>    
    <button @click="posts.pop()">Delete post</button>
    <button @click="reloadPosts">Reload</button>
    <div v-if="posts.length">
      <PostsList v-if="showPosts" :posts="posts"/>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
<script>
import { ref } from 'vue'
import PostsList from '@/components/PostsList.vue'
import getPosts from '@/composables/getPosts.js'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    PostsList
  },
  setup() {
    // const posts = ref([])
    // const error = ref(null)
    // const load = async () => {
    //   try {
    //     let data = await fetch('http://localhost:3000/posts')
    //     if(!data.ok) throw Error('no data available')
    //     posts.value = await data.json()
    //   } catch (err) {
    //     console.log(err.message)
    //     error.value = err.message        
    //   }
    // }
    // const reloadPosts = () => {
    //   load()
    // }
    // const showPosts = ref(true)
    

    const {posts, error, load, showPosts, reloadPosts} = getPosts()
    load()
    return {posts, showPosts, error, reloadPosts}
  }
}
</script>