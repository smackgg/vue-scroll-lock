<template>
  <div id="app">
    <tactful-scroll class="wrapper">
      <div class="content">
      </div>
    </tactful-scroll>
  </div>
</template>
<style>
  body {
    height: 2000px;
    background: #ccc;
  }
  .wrapper {
    width: 100%;
    height: 400px;
    background: #000;
    overflow: scroll;
  }
  .content {
    width: 60%;
    height: 1000px;
    background: red;
  }

</style>
