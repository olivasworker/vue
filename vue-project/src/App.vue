<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>{{title}}</h1>
  <p>Welcome</p>
  <!-- <input type="text" ref="name">
  <button @click="handleClick">click me</button> -->
    <teleport to=".modals" v-if="showModal">
      <Modal :header="header" :text="text" theme="" @close="toggleModal">
        <template v-slot:links>
          <a href="https://google.es">Google</a>
          <br>
          <a href="https://facebook.com">Facebook</a>
        </template>
        <h1>{{header}}</h1>
        <p>{{text}}</p>
      </Modal>
    </teleport >
    <teleport to=".modals" v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
        <h1>Newsletter 2</h1>
        <p>Send an email 2</p>
      </Modal>
    </teleport >
    <button @click="toggleModal">toggle Modal</button>
    <button @click="toggleModalTwo">toggle Modal</button>
<!-- <HelloWorld /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  data(){
    return {
      title: 'My first vue app, premoh',
      header: "Sign in please!",
      text: "Don't be puto and sign in",
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  },
  components: {
    Modal
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: black;
}
.modal.sale{
  background-color: rgba(255, 255, 255, 0.726);
  border: 2px solid white
}
</style>
