## vue-scroll-lock

一个 VUE 组件：子元素 scroll 父元素容器不跟随滚动（兼容PC、移动端）

【 React 请移步 [react-scroll-lock-component](https://github.com/orteth01/react-scroll-lock-component) 】

## 文档 & 例子

[Document & Demo](https://smackgg.github.io/vue-scroll-lock)


<!-- ## 介绍
我们经常遇到一种情况。当滑动滚动条区域时，子元素滚动条到底部或顶部时就会触发父级滚动条，父级滚动条同理会继续向上触发，直至body容器。这是浏览器默认的滚动行为。

但是很多情况，我们想要子元素滚动完成后，不触发父元素的滚动，比如 modal、侧边栏 等等。 -->

## 使用
```bash
npm install vue-scroll-lock --save
// or
yarn add vue-scroll-lock
```

```js
// main.js
import VueScrollLock from 'vue-scroll-lock'

Vue.use(VueScrollLock)

// ***.vue
<scroll-lock>
  <div class="content">
    // ...something
  </div>
</scroll-lock>
```

| 参数 | 描述 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| lock | 是否阻止父级滚动 |Boolean | true/false | true |
| bodyLock | 是否阻止body容器滚动 |Boolean | true/false | false |


## 贡献

欢迎 Star、PR

```
// install
npm install | yarn

// dev
npm run dev
```

## THANKS

移动端的实现参考张鑫旭的[web移动端浮层滚动阻止window窗体滚动JS/CSS处理](http://www.zhangxinxu.com/wordpress/2016/12/web-mobile-scroll-prevent-window-js-css/)

## LICENSE

MIT
