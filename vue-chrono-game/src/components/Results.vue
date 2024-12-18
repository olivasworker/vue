<template>
    <div class="results">
        <h2>Reaction time: {{ score }} ms</h2> 
        <p>{{ rank }}</p>
    </div>
</template>

<script>
    export default{
        props: ['score'],
        data(){
            return {
                rank: null
            }
        },
        mounted(){
            if(this.score < 250){
                this.rank = 'Eres un puto ninja'
            } else if (this.score < 400) {
                this.rank = 'Eres un máquina'
            } else {
                this.rank = 'Dedícate a las chapas'
            }
        }
    }
</script>

<style focused>

</style>