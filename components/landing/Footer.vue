<template>
  <div class="w-100 text-center font-bold text-white bg-primary">
    <p>Copyright © {{ currentyears }} ME & Pondok Tech</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref(new Date());
const currentyears = ref(date.value.getFullYear());
</script>

<style></style>
