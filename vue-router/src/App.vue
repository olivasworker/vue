<template>
  <nav>
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link :to="{name: 'about'}">About</router-link> | 
    <router-link :to="{name: 'jobs'}">Jobs</router-link>
  </nav>
  <button @click="redirect">Redirect</button>
  <button @click="forward">Go forward</button>
  <button @click="back">Go back</button>
  <router-view/><!--  here ours components are going to be rendered dinamicly -->
</template>
<script>
export default{
  methods: {
    redirect(){
      this.$router.push({name: 'home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
    }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  background-color: #42b983;
  color: #2c3e50;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
}
button{
  background-color: #2c3e50;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  border:none;
  margin-right: 5px;
  cursor: pointer;
}
</style>
