<template>
  <div id="app">
    <scroll-lock :bodyLock="true" class="wrapper">
      <div class="content">
        <h2>Content</h2>
      </div>
    </scroll-lock>
  </div>
</template>
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
    background: #2196f3;
    padding: 30px;
    background-image: url('./assets/icon_2.png');
    background-size: 200px 200px;
  }
  .wrapper {
    width: 70%;
    height: 70vh;
    box-sizing: border-box;
    background: #000;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    padding: 20px;
    line-height: 1.8;
  }

  .content {
    height: 2000px;
    background-image: url('./assets/icon_1.png');
  }

</style>
