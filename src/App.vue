<template>
  <div>
    <Counter />
    <DecrementBy1 />
    <IncrementBy1 />
    <DecrementRandomly />
    <IncrementRandomly />
  </div>
  <div>
    <TotalPress />
  </div>
</template>

<script setup>
import Counter from './components/Counter.vue'
import DecrementBy1 from './components/DecrementBy1.vue'
import IncrementBy1 from './components/IncrementBy1.vue'
import DecrementRandomly from './components/DecrementRandomly.vue'
import IncrementRandomly from './components/IncrementRandomly.vue'
import TotalPress from './components/TotalPress.vue'
</script>
