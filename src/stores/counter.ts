import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//   defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象

// setup函数
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  } 
  function $reset() {
    count.value = 0
    name.value = 'Eduardo'
  }
  return {count, name, doubleCount, increment, $reset}
})

// 选项式对象
// export const useCounterStore = defineStore('counter', { 
//   state: () => ({
//     count: 0,
//     name: 'Eduardo'
//   }),
//   getters: {
//     doubleCount: (state) => state.count * 2
//   },
//   actions: {
//     increment() {
//       this.count++
//     }
//   }
// })