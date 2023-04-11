import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 利用setupstore方式定义一个CounterStore
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }

  return { count, doubleCount, increment, decrement }
})

// 利用optionstore方式定义一个CounterStore
export const useCountStore = defineStore('zqq', {
  state: () => ({ count: 0}),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement(){
      this.count--
    }
  },
})
