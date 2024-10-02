<template>
  <PixelWrapper>
    <mp-flex m="4" direction="column">
      <mp-flex direction="column">
        <mp-text mb="4">
          Time to render: <b><code ref="timeToRender"></code></b>
          <br />
          Current count: <code>{{ nodes.length }}</code>
        </mp-text>
        <mp-toggle v-model="isUsePixel">Use <b>MpTableRow</b> and <b>MpTableCell</b></mp-toggle>
      </mp-flex>
      <mp-flex my="4" gap="4">
        <mp-button @click="prepend()">Prepend {{ N }} nodes</mp-button>
        <mp-button @click="insert()">Insert {{ N }} nodes</mp-button>
        <mp-button @click="append()">Append {{ N }} nodes</mp-button>
        <mp-button @click="drop()">Drop all nodes</mp-button>
        <mp-button @click="remove()">Remove 1 node</mp-button>
      </mp-flex>
      <mp-flex my="4" height="500px">
        <mp-table-container width="full" height="full" overflow="scroll">
          <mp-table>
            <mp-table-head is-fixed>
              <mp-table-row>
                <mp-table-cell
                  as="th"
                  scope="col"
                  width="240px"
                  min-width="240px"
                  top="0"
                  left="0"
                  is-fixed
                >
                  Table header
                </mp-table-cell>
              </mp-table-row>
            </mp-table-head>
            <mp-table-body>
              <template v-if="isUsePixel">
                <mp-table-row v-for="item in nodes" :key="item">
                  <mp-table-cell as="td">
                    <mp-text>{{ item }}</mp-text>
                  </mp-table-cell>
                </mp-table-row>
              </template>
              <template v-else>
                <tr v-for="item in nodes" :key="item" class="table-row">
                  <td class="table-cell">
                    <mp-text>{{ item }}</mp-text>
                  </td>
                </tr>
              </template>
            </mp-table-body>
          </mp-table>
        </mp-table-container>
      </mp-flex>
    </mp-flex>
  </PixelWrapper>
</template>

<script>
  import {
    MpButton,
    MpFlex,
    MpToggle,
    MpText,
    MpTable,
    MpTableContainer,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell
  } from '@mekari/pixel'

  export default {
    name: 'Table',
    components: {
      MpButton,
      MpFlex,
      MpToggle,
      MpText,
      MpTable,
      MpTableContainer,
      MpTableHead,
      MpTableBody,
      MpTableRow,
      MpTableCell
    },
    data() {
      return {
        nodes: [],
        start: null,
        times: [],
        N: 1000,
        lastChangeType: null,
        isUsePixel: true
      }
    },
    created() {
      this.startBench()
    },
    beforeUpdate() {
      this.startBench()
    },
    mounted() {
      this.endBench()
    },
    updated() {
      this.endBench()
    },
    methods: {
      addToBenchmark({ type, value }) {
        console.warn('[pixel-benchmark]:', type, `${value}ms`)
      },
      startBench() {
        this.start = new Date()
      },
      endBench() {
        const end = new Date()
        const timeToRender = end - this.start
        this.times.push(timeToRender)
        this.$refs.timeToRender.innerHTML = `${timeToRender}ms`
        this.addToBenchmark({
          value: timeToRender,
          type: this.lastChangeType
        })
      },
      newNodes() {
        return new Array(this.N).fill().map(() => `${Math.random()}:${new Date().getTime()}`)
      },
      prepend() {
        this.nodes = [...this.newNodes(), ...this.nodes]
        this.lastChangeType = `prepend-${this.N}`
      },
      append() {
        this.nodes = [...this.nodes, ...this.newNodes()]
        this.lastChangeType = `append-${this.N}`
      },
      insert() {
        const nodes = this.nodes
        this.nodes = [
          ...nodes.slice(0, nodes.length / 2),
          ...this.newNodes(),
          ...nodes.slice(nodes.length / 2, nodes.length)
        ]
        this.lastChangeType = `insert-${this.N}`
      },
      drop() {
        this.nodes = []
        this.lastChangeType = 'drop-all'
      },
      remove() {
        const nodes = this.nodes
        const pivot = Math.floor(Math.random() * nodes.length)
        this.nodes = [...nodes.slice(0, pivot), ...nodes.slice(pivot + 1, nodes.length)]
        this.lastChangeType = 'remove-1'
      }
    }
  }
</script>

<style scoped>
  .table-row {
    width: var(--sizes-full);
    box-sizing: border-box;
    white-space: nowrap;
  }
  .table-cell {
    padding-left: var(--space-2);
    padding-right: var(--space-4);
    padding-top: var(--space-2);
    padding-bottom: var(--space-2);
    height: var(--sizes-12);
    font-size: var(--fontSizes-md);
    font-family: var(--fonts-body);
    font-weight: var(--fontWeights-regular);
    background-color: var(--colors-white);
    line-height: var(--lineHeights-md);
    letter-spacing: var(--letterSpacings-normal);
    text-align: left;
    border-bottom: var(--borders-1px);
    border-color: var(--colors-gray-100);
    -webkit-transition: all 120ms;
    transition: all 120ms;
  }
  .table-row:hover .table-cell {
    cursor: pointer;
    background-color: var(--colors-gray-50);
  }
</style>
