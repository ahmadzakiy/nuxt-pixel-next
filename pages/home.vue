<template>
  <PixelWrapper>
    <mp-flex h="100vh" bg="red.50" direction="column" align-items="center" justify-content="center">
      <FilterPopover id="filter-age" title="Filter Age" content="Age" :list="30" :type="type" />
    </mp-flex>
  </PixelWrapper>
</template>

<script lang="ts">
  import { MpButton, MpFlex } from '@mekari/pixel'
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HomePage',
    components: {
      MpButton,
      MpFlex
    },
    data() {
      return {
        isShowFilterName: false,
        type: ''
      }
    },
    mounted() {},
    methods: {
      showNotification() {
        alert('clicked')
      }
    }
  })
</script>
