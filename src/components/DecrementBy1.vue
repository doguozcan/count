<template>
  <button
    class="btn btn-primary btn-outline w-44"
    @click="$store.commit('decrement')"
  >
    Decrement by 1
  </button>
</template>

<script setup></script>
