<template>
  <button
    class="btn btn-secondary btn-outline w-44"
    @click="$store.commit('increment')"
  >
    Increment by 1
  </button>
</template>

<script setup></script>
