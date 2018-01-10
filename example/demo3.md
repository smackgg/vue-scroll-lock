## Demo3

当 lock 属性为 false 时（也就是浏览器默认的表现形式）。当滑动中间内容区域至顶部或底部，都会导致触发父级页面滚动；滑动旁边模糊遮罩区域，body容器也会正常滚动。

## 示例代码

```js
// main.js
import VueScrollLock from 'vue-scroll-lock'

Vue.use(VueScrollLock)

// ***.vue
<scroll-lock :lock="false">
  <div class="content">
    // ...something
  </div>
</scroll-lock>

```
