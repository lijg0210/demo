<template>
  <div class="titleContainer">
    <slot>xxx</slot>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="stylus">
.titleContainer
  position relative
  width 96%
  height 30px
  line-height 30px
  border-bottom 1px dotted gray
  padding-left 8px
  font-weight 700
  ::after
    content ""
    position absolute
    left 0
    top 5px
    width 3px
    height 20px
    background-color #007bb7
</style>