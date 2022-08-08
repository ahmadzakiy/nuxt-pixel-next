<template>
  <PixelWrapper>
    <mp-flex h="100vh" align-items="center" justify-content="center">
      <mp-box text-align="center" max-width="sm">
        <mp-icon name="mekari-brand" size="xl" />
        <mp-heading>Hello Pixel 2</mp-heading>
        <mp-text font-size="lg" py="5">
          Mekari Design is a collection of design resources, reusable components and guidelines for
          creating Mekari products. So good news, we are finally here.
        </mp-text>
        <mp-button @click="showSuccessToast">Get Started</mp-button>
      </mp-box>
    </mp-flex>
  </PixelWrapper>
</template>

<script lang="ts">
  import { MpBox, MpText, MpHeading, MpButton, MpFlex, MpIcon } from '@mekari/pixel'
  import Vue from 'vue'

  export default Vue.extend({
    name: 'IndexPage',
    components: {
      MpBox,
      MpText,
      MpHeading,
      MpButton,
      MpFlex,
      MpIcon
    },
    data() {
      return {}
    },
    mounted() {},
    methods: {
      showSuccessToast() {
        this.$nuxt.$toast({
          variant: 'success',
          title: 'Success',
          position: 'top'
        })
      }
    }
  })
</script>
