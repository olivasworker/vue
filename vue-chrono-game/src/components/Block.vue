<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        click me
    </div>
</template>

<script>
    export default{
        props: ['delay', 'isPlaying'],
        methods: {
            startTimer(){
                this.timer = setInterval(() => {
                    this.reactionTime += 10;
                }, 10);
            },
            stopTimer(){
                clearInterval(this.timer)
                console.log(this.reactionTime);
                this.$emit('end', this.reactionTime)
            }
        },
        data(){
            return {
                showBlock: false,
                timer: null,
                reactionTime: 0
            }
        },
        mounted(){
            // this goes after app.vue clicks and stuff
            console.log('Component mounted');
            setTimeout(() => {
                this.showBlock = true
                this.startTimer()
            }, this.delay);
        },
        unmounted() {
            console.log('unmounted');
        },
        updated(){
            // this goes after mounted
            console.log('updated');
        }
    }
</script>

<style focused>
    .block {
        width: 400px;
        border-radius: 15px;
        color: #444;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
        background-color: #05f04b;
    }
</style>