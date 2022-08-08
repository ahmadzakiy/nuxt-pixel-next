<template>
  <ThemeProvider>
    <MpReset />
    <slot></slot>
  </ThemeProvider>
</template>

<script>
  import { ThemeProvider, MpReset } from '@mekari/pixel'

  export default {
    name: 'PixelWrapper',
    components: {
      ThemeProvider,
      MpReset
    }
  }
</script>
