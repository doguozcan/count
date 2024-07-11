<template>
  <div>
    <p class="text-xl">{{ $store.state.counter }}</p>
    <button class="btn" @click="$store.commit('decrementBy1')">
      Decrement by 1
    </button>
    <button class="btn" @click="$store.commit('incrementBy1')">
      Increment by 1
    </button>
  </div>
</template>

<script setup></script>
