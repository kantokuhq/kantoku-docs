<template>
  <img v-if="colorMode.value === 'dark'" src="/images/kantoku_white.png">
  <img v-else src="/images/kantoku_black.png">
</template>
<script setup>
const colorMode = useColorMode()
</script>