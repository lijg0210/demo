<template>
  <div class="headerContainer">
    <div class="headerLeft">
      <img src="../assets/zgsy.png" alt="img" class="logo">
      <span class="text">勘探板块HSR体系审核监督管理系统</span>
    </div>
    <div class="headerRight">
      <div v-for="(item, index) in headerArr" :key="index" class="rightItem">
        <i class="iconfont" :class="`${item.icon} ${item.newMsg ? 'active' : ''}`"></i>
        <!-- <span class="text">{{item.text}}</span> -->
        <router-link :to="item.link" style="color: #fff;">{{item.text}}</router-link>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'IndexHeader',
  data() {
    return {
      headerArr: [
        {
          icon: 'icon-xiaoxi',
          text: '消息',
          link: '/message',
          newMsg: true
        },
        {
          icon: 'icon-yuyan',
          text: '语言',
          link: '/language'
        },
        {
          icon: 'icon-yonghu',
          text: '用户设置',
          link: '/userSetting'
        },
        {
          icon: 'icon-shezhi1',
          text: '切换主题',
          link: '/theme'
        },
        {
          icon: 'icon-iconfontwenhao1',
          text: '操作手册',
          link: '/operation'
        }
      ]
    };
  },
};
</script>

<style scoped lang="stylus">
.headerContainer
  width 100%
  height 80px
  background-color #5f5ca6
  display flex
  align-items center
  justify-content space-between
  .headerLeft
    margin-left 20px
    display flex
    align-items center
    .logo
      width 50px
      height 50px
      margin-right 15px
    .text
      font-size 30px
      color #fff
  .headerRight  
    display flex
    .rightItem
      margin-right 30px
      display flex
      flex-direction column
      align-items center
      color #fff
      .iconfont
        margin-bottom 5px
        &.active
          position relative
          &:after
            content: ''
            position absolute
            top -5px
            right -5px
            width 5px
            height 5px
            border-radius 50%
            background-color red



</style>