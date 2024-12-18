<template>
  <SignUpForm />
</template>

<script>
import SignUpForm from './components/SignUpForm.vue';

export default {
  name: 'App',
  components: {
    SignUpForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  display: block;
  position: relative;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
body{
  background-color: #ccc;
}
</style>
