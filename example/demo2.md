## Demo2

当 lock 和 bodyLock 属性都设置为 true 时。当滑动中间内容区域至顶部或底部，父级不会跟着滚动；当滑动旁边模糊遮罩区域，body容器也不会滚动。

## 示例代码

```js
// main.js
import VueScrollLock from 'vue-scroll-lock'

Vue.use(VueScrollLock)

// ***.vue
<scroll-lock :lock="true" :bodyLock="true">
  <div class="content">
    // ...something
  </div>
</scroll-lock>

```

### 默认 lock 为 true，可以省略参数

```js
// main.js
import VueScrollLock from 'vue-scroll-lock'

Vue.use(VueScrollLock)

// ***.vue
<scroll-lock :bodyLock="true">
  <div class="content">
    // ...something
  </div>
</scroll-lock

```

- 注意：移动端的 Modal 想实现本例子效果（滑动遮罩区域 body 也不随着滚动）需要额外的做一些事情，因为 body 的 ```overflow: hidden``` 在移动端是不生效的，需要将 mask 遮罩阻止 touchmove 事件，示例代码见项目文件```example/app.vue```
