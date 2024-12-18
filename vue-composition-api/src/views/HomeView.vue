<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <p ref="p">My name is {{ name }}</p>
    <p ref="p2">I'm {{ age }} years old</p>
    <button @click="handleClick">Press me</button>
    <button @click="age++">Increase age</button> -->
    <h2>Refs</h2>
    <p>{{ person.name }} - {{ person.age }}</p>
    <button @click="updatePerson">Click</button>
    
    <h2>Reactive data</h2>
    <p>{{ person2.name }} - {{ person2.age }}</p>
    <button @click="updateReactive">Click</button>



    <h2>Computed</h2>
    <p>{{ nombre }}</p>
    <h2>Search</h2>
    <p>Search term: {{ search }}</p>
    <input type="text" v-model="search">
    <div v-for="nom in matchingNames" :key="nom">
      {{ nom }}
    </div>

    <h2>Watch</h2>
    <button @click="handleWatch">Stop Watch</button>
    <!-- <input type="text" v-model="name"> -->
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  setup(){
    // data inside is not reactive by default, if the value changes, it won't render instanctly, we have to use ref
    const p = ref(null)
    const person = ref({name: 'George', age: 99})
    const person2 = reactive({name: 'RadiactivoMan', age: 40})
    const name = ref('Jorge')
    const age = ref(32)

    const names = ref(['Juan', 'Pedro', 'Pablo'])
    const search = ref('')
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })
    const nombre = computed(() => {
      return 'Mari Carmen'
    })

    // name.value = 'diwilo'
    const stopWatch = watch(search, () => {
      // runs associated to a variable / event, triggers each time the data changes
      console.log('watch fn run'+search.value)
    })
    const stopEffect = watchEffect(() => {
      // runs initially and everytime a value changes (if you use it within)
      console.log('watcheffect fn run' + search.value)
    })
    const handleWatch = () => {
      stopWatch()
      stopEffect()
    }
    const handleClick = () => { 
      // console.log(p, p.value);
      // p.value.classList.add('test')
      // p.value.textContent = 'Hola caracola'

      // name.value = 'Diwilo'
      // age.value = 18
      person.value.name = 'Willardo'
    }

    const updatePerson = () => {
      person.value.name = 'Wilardo'
      person.value.age = '69'
    }

    const updateReactive = () => {
      person2.name = 'Fision Boy'
      person2.age = 20
    }
    return {
      // name, age, handleClick, p
      updatePerson, person, updateReactive, person2, nombre, names, search,matchingNames, handleWatch
    }
  },
  // data(){
  //   return 
  // }
  // created(){
  //   console.log('created');
  // },
  // mounted(){
  //   console.log('mounted');
  // }
}
</script>
