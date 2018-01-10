## Demo1

当 lock 属性为 true 时（默认）。当滑动中间内容至顶部或底部，父级不会跟着滚动；当滑动旁边模糊遮罩区域，body容器仍然会正常滚动。

## 示例代码

```js
// main.js
import VueScrollLock from 'vue-scroll-lock'

Vue.use(VueScrollLock)

// ***.vue
<scroll-lock :lock="true">
  <div class="content">
    // ...something
  </div>
</scroll-lock>

```

### 默认 lock 为 true 可以省略参数

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
