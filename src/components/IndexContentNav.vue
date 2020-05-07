<template>
  <div class="contentNavContainer">
    <el-tabs v-model="activeName" @tab-click="handleClick" style="padding-left: 50px">  
      <el-tab-pane v-for="(item, index) in navData" :key="index" :label="item.text" :name="index.toString()"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
const OK = 0
import {Tabs, TabPane} from 'element-ui'
export default {
  name: 'IndexContentNav',
  data() {
    return {
      activeName: '0',
      navData: []
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    async reqInitNavData(){
      const {code, data} = await this.$axios('/api/navData')
      if(code === OK) this.navData = data
    }
  },
  mounted() {
    this.reqInitNavData()
  },
  components: {
    'el-tabs': Tabs,
    'el-tab-pane': TabPane
  }
};
</script>

<style scoped lang="stylus">
.contentNavContainer
  width 100%
  height 40px
  background-color #eee
</style>