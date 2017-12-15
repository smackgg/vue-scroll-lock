<template>
  <div id="app">
    <div class="">
      <button @click="toggleLock" type="button" name="button">
        {{ this.lock ? 'unlock' : 'lock' }}
      </button>
    </div>
    <markdown class="markdown-body"></markdown>
    <scroll-lock :lock="lock" :bodyLock="false" class="wrapper markdown-body">
    </scroll-lock>
  </div>
</template>
<script type="text/javascript">
import md from '../README.md';

export default {
  name: 'ThirdActivity',
  data () {
    return {
      lock: true,
    }
  },
  components: {
    markdown: md,
  },
  methods: {
    toggleLock () {
      this.lock = !this.lock
    },
  }
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  html {
    height: 100%;
  }
  body {
    height: 2000px;
    padding: 30px;
  }
  .wrapper {
    width: 100%;
    height: 40vh;
    box-sizing: border-box;
    /*background: #000;*/
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    padding: 20px;
    line-height: 1.8;
  }
</style>
