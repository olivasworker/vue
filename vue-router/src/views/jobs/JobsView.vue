<template>
    <div class="jobs">
        <h1>Jobs</h1>
        <div v-if="jobs.length">
            <div v-for="job in jobs" :key="job.id" class="job">
                <router-link :to="{name: 'jobDetails', params: {id: job.id}}">
                    <h2>{{ job.name }}</h2>
                </router-link>
            </div>
        </div>
        <div v-else>
            Loading... launch json-server data/db.json
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            jobs: []
            // [
            //     {id: 1, name: 'front-end developer', details: 'my duty is choose the correct color :v'},
            //     {id: 2, name: 'backend-end developer', details: 'anyone is going to value my job :v'},
            //     {id: 3, name: 'fullstack developer', details: 'I\'m going to do twice as much work and to have same salary :V'},
            // ]
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.dir(err.message))
    },
}
</script>
<style>
    .job h2{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .job h2:hover {
        background: #ddd;
    }
    .job a {
        text-decoration: none;
    }
</style>