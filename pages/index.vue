<template lang="pug">
.page-index.flex.items-center.justify-center.h-screen
  #lottie(ref="lottie")
</template>

<script>
import data from '@/assets/animation.js'
export default {
  data () {
    return {
      options: {},
      anim: {},
    }
  },

  mounted () {
    if (process.browser && window.lottie) {
      this.options = {
        container: this.$refs.lottie,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: data,
      }
      this.anim = window.lottie.loadAnimation(this.options)
      this.anim.onComplete = this.complete
    }
  },
  methods: {
    complete () {
      this.anim.finished = true
    },
    playit () {
      if (this.anim.finished) {
        this.anim.finished = false
        this.anim.goToAndPlay(1, true)
      }
    },
  },
}
</script>

<style lang="stylus">
</style>
