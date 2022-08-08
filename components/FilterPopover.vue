<template>
  <mp-flex>
    <mp-box v-if="type === 'draft'" pb="300px" mr="12">
      <mp-popover id="statusPopover">
        <mp-popover-trigger>
          <mp-button>{{ title }}</mp-button>
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
            <mp-popover-list-item v-for="index in list" :key="index">
              {{ content }} {{ index }}
            </mp-popover-list-item>
          </mp-popover-list>
        </mp-popover-content>
      </mp-popover>
    </mp-box>
    <mp-box ref="popover" pb="300px">
      <mp-popover
        id="datePopover"
        initial-focus-ref="#datePopover"
        :is-open="isDatePopoverOpen"
        is-manual
      >
        <mp-popover-trigger>
          <mp-box>
            <mp-input-group>
              <mp-input
                id="datePopover"
                :value="dateText"
                is-read-only
                cursor="pointer"
                @click="onToggleDatePopover"
              />
              <mp-input-right-addon :with-background="false">
                <mp-icon name="chevrons-down" size="sm" />
              </mp-input-right-addon>
            </mp-input-group>
          </mp-box>
        </mp-popover-trigger>
        <mp-popover-content
          :width="dateStep === 'default' ? '240px' : '280px'"
          bg="white"
          rounded="md"
          shadow="lg"
          border-width="1px"
          border-color="gray.400"
          position="absolute"
          data-testid="datePopoverContent"
        >
          <mp-popover-list v-if="dateStep === 'default'">
            <mp-popover-list-item
              v-for="index in 10"
              :key="index"
              @click="dateText = `Date: ${index}`"
            >
              Date: {{ index }}
            </mp-popover-list-item>
            <mp-popover-list-item @click="onUpdateDateStep('custom')">
              Custom
            </mp-popover-list-item>
          </mp-popover-list>
          <mp-box v-else>
            <mp-popover-header border-top-radius="md">
              <mp-button-icon
                size="sm"
                name="arrows-left"
                mr="2"
                p="0"
                @click="onUpdateDateStep('default')"
              />
              <mp-text font-weight="semibold"> Custom date </mp-text>
            </mp-popover-header>
            <mp-box px="12px" mt="12px">
              <mp-text font-weight="semibold" mb="1"> From </mp-text>
              <mp-date-picker value-type="date" placeholder="Select date" />
            </mp-box>
            <mp-box px="12px" mt="20px">
              <mp-text font-weight="semibold" mb="1"> To </mp-text>
              <mp-date-picker value-type="date" placeholder="Select date" />
            </mp-box>
            <mp-button width="full" border-top-radius="0" mt="20px"> Filter </mp-button>
          </mp-box>
        </mp-popover-content>
      </mp-popover>
    </mp-box>
  </mp-flex>
</template>

<script>
  import {
    MpIcon,
    MpFlex,
    MpBox,
    MpButton,
    MpButtonIcon,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
    MpText,
    MpDatePicker,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverHeader,
    MpPopoverList,
    MpPopoverListItem
  } from '@mekari/pixel'

  export default {
    name: 'FilterPopover',
    components: {
      MpIcon,
      MpFlex,
      MpBox,
      MpInput,
      MpInputGroup,
      MpInputRightAddon,
      MpButton,
      MpButtonIcon,
      MpText,
      MpDatePicker,
      MpPopover,
      MpPopoverTrigger,
      MpPopoverContent,
      MpPopoverHeader,
      MpPopoverList,
      MpPopoverListItem
    },
    props: {
      type: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: 'popover'
      },
      title: {
        type: String,
        default: 'Show Popover'
      },
      content: {
        type: String,
        default: 'Option list'
      },
      list: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        dateStep: 'default',
        isDatePopoverOpen: false,
        dateText: 'Select date'
      }
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside)
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside)
    },
    methods: {
      onUpdateDateStep(val) {
        this.dateStep = val
        this.isDatePopoverOpen = true
      },
      onToggleDatePopover() {
        this.isDatePopoverOpen = true
      },
      handleClickOutside(e) {
        const el = this.$refs.popover.$el
        const isClickOutside = e.target !== el && !el.contains(e.target)

        if (isClickOutside && this.isDatePopoverOpen) this.isDatePopoverOpen = false
      }
    }
  }
</script>
