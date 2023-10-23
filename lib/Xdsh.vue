<script lang="ts">
import { Terminal } from 'xdsh';

export default {
  props: {
    img: {
      type: Object,
      required: false
    }
  },
  mounted() {
    let { terminal, xdsh } = Terminal.newTerminal(this.img)
    let xdsh_div = <HTMLDivElement>this.$refs.xdsh

    xdsh_div.appendChild(terminal)
  }
}
</script>

<template>
  <div ref="xdsh" class="xdsh"></div>
</template>

<style>
@import 'xdsh/dist/xdsh.css';
</style>
