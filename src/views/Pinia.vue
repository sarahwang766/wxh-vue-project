<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { reactive, toRefs } from 'vue';

const counter = useCounterStore(); 

counter.count++
let torEF = storeToRefs(counter)

counter.$subscribe((mutation, state) => {
  console.log(mutation, state, counter)
})

function patchStore() {
  counter.$patch({ count: 100 , name: 'patch'})
}


// reactive局限性：响应式对象的原始类型属性解构为本地变量后，会失去响应性
// const state = reactive({count: 0})
// let {count} = state
// count++
</script>
<template>
  <div>Count: {{ counter.count }}</div>
  <div>Name: {{ counter.name }}</div>
  <input v-model="counter.name"></input>
  <button @click="counter.$reset()">Reset Pinia Store</button>
  <button @click="patchStore">Patch Store</button>
  <button @click="counter.count++">Counter+</button>
</template>