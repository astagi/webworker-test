<template>
  <div id="app">
    <h1>Fibonacci</h1>
    <input v-model.number="inputNumber" type="number"/>
    <button @click="calculate()">Calculate</button>
    <div class='result'>Result: {{result}}</div>
  </div>
</template>

<script>
import fibonacci from './fibonacci'

export default {
  name: 'App',
  data () {
    return {
      inputNumber: 0,
      result:  0
    }
  },
  methods: {
    calculate() {
      this.result = fibonacci(this.inputNumber)
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
  margin-top: 60px;
}

.result {
  padding: 1rem;
}
</style>
