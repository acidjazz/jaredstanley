<template>
<div class="page-index flex items-center justify-center h-screen">
    <div class="cursor-pointer" id="lottie" ref="lottie" @click="playit"></div>
</div>
</template>

<script>
// import data from '@/assets/data.json'
import data from '@/assets/animation.js'
export default {
  transition: 'zoom',
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
