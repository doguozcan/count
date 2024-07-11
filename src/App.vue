<template>
  <div>
    <p class="text-xl">{{ $store.state.counter }}</p>
    <button class="btn" @click="$store.commit('decrement')">
      Decrement by 1
    </button>
    <button class="btn" @click="$store.commit('increment')">
      Increment by 1
    </button>
    <button class="btn" @click="$store.dispatch('decrementRandomly')">
      Decrement randomly
    </button>
    <button class="btn" @click="$store.dispatch('incrementRandomly')">
      Increment randomly
    </button>
  </div>
</template>

<script setup></script>
