## vue-scroll-lock [ VUE 组件：子元素 scroll 父元素容器不跟随滚动（兼容PC、移动端）]

## 介绍
我们经常遇到一种情况。当滑动滚动条区域时，子元素滚动条到底部或顶部时就会触发父级滚动条，父级滚动条同理会继续向上触发，直至body容器。这是浏览器默认的滚动行为。下面是一个例子：

*在下图区域滚动，到底部或顶部继续滑动时就会触发父级滚动。*

<div style="height: 150px; width: 200px; overflow: scroll">
  <img style="width: 100%;" src="http://7xl432.com1.z0.glb.clouddn.com/vue-scroll-lock__demo1.jpg"></img>
  <img style="width: 100%;" src="http://7xl432.com1.z0.glb.clouddn.com/vue-scroll-lock__demo1.jpg"></img>
</div>

---

但是很多情况，我们想要子元素滚动完成后，不触发父元素的滚动，比如 modal、侧边栏 等等。

例子及使用方法，见[Demo](#demo)。


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
