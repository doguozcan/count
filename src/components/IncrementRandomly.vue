<template>
  <button
    class="btn btn-secondary btn-outline w-44"
    @click="$store.dispatch('incrementRandomly')"
  >
    Increment randomly
  </button>
</template>

<script setup></script>
