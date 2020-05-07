<template>
  <div id="app">
    <Index></Index>
    

  </div>
</template>

<script>
import Index from './components/Index'
export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style scoped lang="stylus">
#app
  min-width 1000px
  height 5000px
</style>
