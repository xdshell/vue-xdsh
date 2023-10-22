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
    let terminal = Terminal.newTerminal(this.img)
    let xdsh = <HTMLDivElement>this.$refs.xdsh

    xdsh.appendChild(terminal)
  }
}
</script>

<template>
  <div ref="xdsh" class="xdsh"></div>
</template>

<style>
@import 'xdsh/dist/xdsh.css';
</style>
