<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <slot>Default Content</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Modal',
    props: ['header', 'text', 'theme'],
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;        
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;
    }
    h1 {
        color: #222;
    }
</style>