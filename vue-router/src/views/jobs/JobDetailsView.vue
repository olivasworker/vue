<template>
    <div v-if="job">
        <div class="jobsDetails">
            <h1>{{ job.name }}</h1>
            <p>The job id is {{ id }}</p>
            <p>{{ job.details }}</p>
        </div>
    </div>
    <div v-else>
        <p>Loading job details...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            job: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.dir(err.message))
    },
    // or -- $route.params.id
    // data(){
    // return {
    // id: this.$route.params.id
    // }
    // }
}
</script>