<template>
  <el-tabs :tab-position="tabPosition" style="width: 87%; margin-left: 6%; height:710px;">
    <el-tab-pane label="首页">
      <home-header></home-header>
      <home-content-left></home-content-left>
      <home-content-right></home-content-right>
    </el-tab-pane>
    <el-tab-pane label="解决方案">解决方案</el-tab-pane>
    <el-tab-pane label="核心引擎">核心引擎</el-tab-pane>
    <el-tab-pane label="最新动态">最新动态</el-tab-pane>
    <el-tab-pane label="合作伙伴">合作伙伴</el-tab-pane>
    <el-tab-pane label="关于我们">关于我们</el-tab-pane>
  </el-tabs>
</template>

<script>
import homeHeader from './header'
import homeContentLeft from './homeContentLeft'
import homeContentRight from './homeContentRight'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeContentLeft,
    homeContentRight
  },
  data () {
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  .el-tabs__item {
      padding: 0 0;
      height: 97px;
  }
  .el-tabs__nav {
      transform: translateY(55px) !important;
  }
  .el-tabs__header {
      background-color: #ececec;
      width: 70px;
  }
  .el-tabs--left{
      background-color: #ffffff;
  }
  .el-tabs--left .el-tabs__nav-wrap.is-left::after {
      left: 0;
   }
   .el-tabs--left .el-tabs__active-bar.is-left {
      left : 0;
   }
   .el-tabs--left .el-tabs__item.is-left {
      transform: rotate(90deg);
      text-align: center;
      padding-top: 35px;
      font-size: 16px;
  }
  .el-tabs--left .el-tabs__header.is-left {
      margin-right: 0;
  }
  .el-tabs__content {
    height: 100%;
  }
  .el-tab-pane {
    width: 100%;
    height: 100%;
  }
</style>
