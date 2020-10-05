<template>
  <div id="app">
    <h1>Fibonacci 🌀</h1>
    <input v-model.number="inputNumber" type="number" placeholder="Insert a number"/>
    <button @click="calculate()">Calculate</button>
    <div v-if="result" class='result'>Result: {{result}}</div>
  </div>
</template>

<script>
import Worker from './fibonacci.worker'
const worker = new Worker();

export default {
  name: 'App',
  data () {
    return {
      inputNumber: 0,
      result: null
    }
  },
  methods: {
    calculate() {
      worker.onmessage = ({data}) => {
        this.result = data
      };
      worker.postMessage(this.inputNumber);
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
