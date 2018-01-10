<template>
  <div id="app">
    <div class="wrapper markdown-body" :class="{
        'modal--show': showModal
      }">
      <markdown></markdown>

      <div id="demo" class="demo">
        <h2>例子</h2>
        <h3>1. 上文提到的例子</h3>
        <div class="demo-content">
          <span>作为对比，下方列出两种情况的例子</span>
          <div class="demo4-wrapper">
            <scroll-lock class="demo4">
              滑动此区域，父级不会跟随滚动
              <img src="http://7xl432.com1.z0.glb.clouddn.com/vue-scroll-lock__demo1.jpg" alt="">
              <img src="http://7xl432.com1.z0.glb.clouddn.com/vue-scroll-lock__demo1.jpg" alt="">
            </scroll-lock>
            <scroll-lock :lock="false" class="demo4">
              滑动此区域，父级会跟随滚动
              <img src="http://7xl432.com1.z0.glb.clouddn.com/vue-scroll-lock__demo1.jpg" alt="">
              <img src="http://7xl432.com1.z0.glb.clouddn.com/vue-scroll-lock__demo1.jpg" alt="">
            </scroll-lock>
          </div>
        </div>
        <h3>2. 常见的 Modal 例子（点击蓝色字体查看例子）</h3>
        <div class="demo-content">
          <span class="demo-content__link" @click="showDemo1">Demo1:</span>
          <span>当 lock 属性为 true 时（默认）。当滑动中间内容至顶部或底部，父级不会跟着滚动；当滑动旁边模糊遮罩区域，body容器仍然会正常滚动。</span>
        </div>
        <div class="demo-content">
          <span class="demo-content__link" @click="showDemo2">Demo2:</span>
          <span>当 lock 和 bodyLock 属性都设置为 true 时。当滑动中间内容区域至顶部或底部，父级不会跟着滚动；当滑动旁边模糊遮罩区域，body容器也不会滚动。</span>
        </div>
        <div class="demo-content">
          <span class="demo-content__link" @click="showDemo3">Demo3:</span>
          <span>当 lock 属性为 false 时（也就是浏览器默认的表现形式）。当滑动中间内容区域至顶部或底部，都会导致触发父级页面滚动；滑动旁边模糊遮罩区域，body容器也会正常滚动。</span>
        </div>
      </div>
    </div>
    <div class="modal-wrapper" v-show="showModal">
      <div class="mask" @touchmove="onMaskTouchMove"></div>
      <div class="modal">
        <div class="close" @click="closeModal">
          X
        </div>
        <scroll-lock :lock="lock" :bodyLock="bodyLock" class="lock-wrapper markdown-body">
          <Demo1 v-show="demoMd === 'Demo1'" class="markdown-body"></Demo1>
          <Demo2 v-show="demoMd === 'Demo2'" class="markdown-body"></Demo2>
          <Demo3 v-show="demoMd === 'Demo3'" class="markdown-body"></Demo3>
        </scroll-lock>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import md from '../README.md';
import Demo1 from './demo1.md';
import Demo2 from './demo2.md';
import Demo3 from './demo3.md';
export default {
  name: 'ThirdActivity',
  data () {
    return {
      lock: true,
      showModal: false,
      bodyLock: false,
      demoMd: 'Demo1',
    }
  },
  components: {
    markdown: md,
    Demo1: Demo1,
    Demo2: Demo2,
    Demo3: Demo3,
  },
  methods: {
    toggleLock () {
      this.showModal = true;
    },
    closeModal () {
      this.showModal = false;
      this.lock = true;
      this.bodyLock = false;
    },
    onMaskTouchMove (e) {
      if (this.demoMd === 'Demo2') {
        e.preventDefault();
        return false;
      }
    },
    showDemo1 () {
      this.showModal = true;
      this.lock = true;
      this.bodyLock = false;
      this.demoMd = 'Demo1';
    },
    showDemo2 () {
      this.showModal = true;
      this.lock = true;
      this.bodyLock = true;
      this.demoMd = 'Demo2';
    },
    showDemo3 () {
      this.showModal = true;
      this.lock = false;
      this.bodyLock = false;
      this.demoMd = 'Demo3';
    },
  }
}
</script>
<style src="./common.css"></style>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  body {
    padding: 20px;
  }

  .wrapper.modal--show {
    filter: blur(1px);
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    overflow: hidden;

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  .lock-wrapper {
    width: 100%;
    height: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
    overflow: scroll;
  }

  .modal {
    width: 80vw;
    height: 50vh;
    background: #fff;
    box-sizing: border-box;
    position: relative;

    .close {
      width: 40px;
      height: 40px;
      position: absolute;
      right: 10px;
      top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 1;
    }
  }


  .demo {
    padding-top: 100px;

    h3 {
      margin-bottom: 20px;
    }

    .demo-content {
      margin: 10px;
      line-height: 2;

      &__link {
        color: blue;
        cursor: default;
        margin-right: 20px;
      }
    }
  }

  .demo4-wrapper {
    display: flex;
    .demo4 {
      height: 250px;
      width: 300px;
      overflow: scroll;
      color: gray;
      font-size: 14px;
      text-align: center;
      img {
        width: 100%;
      }
    }
  }

</style>
