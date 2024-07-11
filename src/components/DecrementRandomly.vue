<template>
  <button
    class="btn btn-primary btn-outline w-44"
    @click="$store.dispatch('decrementRandomly')"
  >
    Decrement randomly
  </button>
</template>

<script setup></script>
