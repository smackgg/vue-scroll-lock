<template>
  <div tabIndex="0">
    <slot></slot>
  </div>
</template>

<script>
  const upKeys = [
    33, // pageUp
    38,  // arrowUp
  ]
  const downKeys = [
    32, // space
    34, // pageDown
    40,  // arrowDown
  ]
  export default {
    name: 'VueTactfulScroll',
    componentName: 'VueTactfulScroll',
    // props: {
    //   parentNoScroll: true,
    // },
    data () {
      return {
        pageY: 0,
        maxHeight: 0,
        scrollTop: 0,
      }
    },

    methods: {
      bindEvent () {
        this.$el.addEventListener('wheel', this.onWheelHandler, false)
        this.$el.addEventListener('keydown', this.onKeyDownHandler, false)
        this.$el.addEventListener('touchstart', this.onTouchStartHandler)
        this.$el.addEventListener('touchmove', this.onTouchMoveHandler, false)
      },
      removeEvent () {
        this.$el.removeEventListener('wheel', this.onWheelHandler, false)
        this.$el.removeEventListener('keydown', this.onKeyDownHandler, false)
        this.$el.removeEventListener('touchstart', this.onTouchStartHandler)
        this.$el.removeEventListener('touchmove', this.onTouchMoveHandler, false)
      },
      onTouchStartHandler (e) {
        const events = e.touches[0] || e
        this.pageY = events.pageY
        this.scrollTop = this.$el.scrollTop
        this.maxHeight = this.$el.scrollHeight - this.$el.clientHeight
      },
      onTouchMoveHandler (e) {
        if (this.maxHeight <= 0) {
          this.cancelScrollEvent(e)
        }
        const elScroll = this.$el
        // current scroll top
        const scrollTop = elScroll.scrollTop
        const events = e.touches[0] || e
        const distanceY = events.pageY - this.pageY

        // top limit
        if (distanceY > 0 && scrollTop == 0) {
          this.cancelScrollEvent(e)
          return
        }
        // bottom limit
        if (distanceY < 0 && (scrollTop + 1 >= this.maxHeight)) {
          this.cancelScrollEvent(e)
          return
        }
      },
      onWheelHandler (e) {
        this.handleEventDelta(e, e.deltaY)
      },

      onKeyDownHandler (e) {
        if (upKeys.indexOf(e.keyCode) >= 0) {
          this.handleEventDelta(e, -1)
        } else if (downKeys.indexOf(e.keyCode) >= 0) {
          this.handleEventDelta(e, 1)
        }
      },

      cancelScrollEvent (e) {
        e.stopImmediatePropagation()
        e.preventDefault()
        return false
      },

      handleEventDelta (e, delta) {
        const isDeltaPositive = delta > 0
        const el = this.$el
        const { scrollTop, scrollHeight, clientHeight } = el

        let shouldCancelScroll = false
        if (isDeltaPositive && delta > scrollHeight - clientHeight - scrollTop) {
          // bottom limit
          el.scrollTop = scrollHeight
          shouldCancelScroll = true
        } else if (!isDeltaPositive && -delta > scrollTop) {
          // top limit
          el.scrollTop = 0
          shouldCancelScroll = true
        }

        if (shouldCancelScroll) {
          this.cancelScrollEvent(e)
        }
      },
    },

    mounted () {
      this.bindEvent()
    },

    beforeDestroy () {
      this.removeEvent()
    },
  }
</script>
