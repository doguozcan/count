<template>
  <div
    class="flex flex-col max-w-lg mx-auto h-screen items-center justify-center"
  >
    <Title />
    <Counter />
    <div class="flex gap-8">
      <div class="flex flex-col gap-5 py-4">
        <DecrementBy1 />
        <IncrementBy1 />
      </div>

      <div class="flex flex-col gap-5 py-4">
        <DecrementRandomly />
        <IncrementRandomly />
      </div>
    </div>
    <TotalPress />
  </div>
</template>

<script setup>
import Title from './components/Title.vue'
import Counter from './components/Counter.vue'
import DecrementBy1 from './components/DecrementBy1.vue'
import IncrementBy1 from './components/IncrementBy1.vue'
import DecrementRandomly from './components/DecrementRandomly.vue'
import IncrementRandomly from './components/IncrementRandomly.vue'
import TotalPress from './components/TotalPress.vue'
</script>
