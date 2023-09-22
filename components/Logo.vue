<template>
  <ColorScheme tag="span">
    <img v-if="$colorMode.value === 'dark'" src="/images/kantoku_white.png" alt="Kantoku logo">
    <img v-else src="/images/kantoku_black.png" alt="Kantoku logo">
  </ColorScheme>
</template>