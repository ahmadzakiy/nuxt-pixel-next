<template>
  <mp-box pb="300px">
    <mp-popover 
      id="popover-scrollable"
      :is-open="isPopoverOpen"
      @open="isPopoverOpen = true"
      @close="isPopoverOpen = false"
    >
      <mp-popover-trigger @click="handleAlert">
        <mp-button>{{ `${isPopoverOpen ? 'Close' : 'Open'} Popover` }}</mp-button>
      </mp-popover-trigger>
      <mp-popover-content
        max-width="64"
        bg="white"
        rounded="md"
        shadow="lg"
        border-width="1px"
        border-color="gray.400"
        max-height="300px"
        overflow-y="auto"
      >
        <mp-popover-list>
          <mp-popover-list-item v-for="index in 30" :key="index" @click="handleAlert(index)">
            Option List {{ index }}
          </mp-popover-list-item>
        </mp-popover-list>
      </mp-popover-content>
    </mp-popover>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpButton,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "PopoverWithScrollable",
  components: {
    MpBox,
    MpButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  data() {
    return {
      isPopoverOpen: true
    }
  },
  methods: {
    handleAlert(e) {
      console.log(e)
      // this.isPopoverOpen = false
    }
  }
};
</script>
