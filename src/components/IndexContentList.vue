<template>
  <el-row class="tac" style="width: 240px;">
    <el-col 
      :span="12"
      style="width: 100%;">
      <h5>element-ui</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item>
            <i class="el-icon-location"></i>
            <span>选项3</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-location"></i>
            <span>选项4</span>
          </el-menu-item>
        </el-submenu> -->
        <el-submenu v-for="(item, index) in leftData" :key="index" :index="index.toString()">
          <template slot="title">
            <i class="iconfont" :class="item.icon" style="margin-right: 15px; font-weight: 700;"></i>
            <span style="font-weight: 700;">{{item.text}}</span>
          </template>
          <el-menu-item v-for="(sItem, sIndex) in item.childData" :key="sIndex" style="color: gray;">
            <i class="iconfont" :class="sItem.childIcon" style="margin-right: 15px;"></i>
            <span>{{sItem.childText}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
const OK = 0
import {Row, Col, Menu, MenuItem, MenuItemGroup, Submenu} from 'element-ui'
export default {
  name: 'IndexContentList',
  data() {
    return {
      leftData: []
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    async reqInitListData(){
      const {code, data} = await this.$axios('/api/leftData')
      if(code === OK) this.leftData = data

    }
  },
  mounted() {
    this.reqInitListData()
  },
  components: {
    'el-row': Row,
    'el-col': Col,
    'el-menu': Menu,
    'el-menu-item': MenuItem,
    'el-menu-item-group': MenuItemGroup,
    'el-submenu': Submenu
  }
};
</script>

<style scoped lang="stylus">
</style>