<script setup lang="ts">
import { useCounterStore,useCountStore } from '../stores/counter';
const counterStore = useCounterStore(); // 实例化
const countStore = useCountStore();
</script>

<template>
    <div>
        <h2>{{ counterStore.count }}</h2>
        <h2>{{ counterStore.doubleCount }}</h2>
        <button @click="counterStore.increment">+1</button>
        <button @click="counterStore.decrement">-1</button>

        <h2>{{ countStore.count }}</h2>
        <h2>{{ countStore.double }}</h2>
        <button @click="countStore.increment">+1</button>
        <button @click="countStore.decrement">-1</button>
    </div>
</template>

<style scoped>

</style>