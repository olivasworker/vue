import {ref} from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    const load = async () => {
    try {
        let data = await fetch('http://localhost:3000/posts')
        if(!data.ok) throw Error('no data available')
        posts.value = await data.json()
    } catch (err) {
        console.log(err.message)
        error.value = err.message        
    }
    }
    const reloadPosts = () => {
        load()
    }

    const showPosts = ref(true)

    return { posts, error, load, showPosts, reloadPosts }
}

export default getPosts