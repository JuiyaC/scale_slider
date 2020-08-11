<template>
     <div class="home_header_list">
        <ul class = "home_header">
          <li>科学投顾</li>
          <li>|</li>
          <li>投资决策</li>
          <li>|</li>
          <li>个人财富</li>
          <li>|</li>
          <li>保险投顾</li>
        </ul>
        <img class="home_logo" src = "../assets/logo.png">
      </div>
</template>
<script>
export default {
  name: 'homeHeader'
}
</script>
<style scoped>
    .home_header_list {
        margin-top: 75px;
    }
    .home_header{
        display: inline-block;
        font-size: 14px;
    }
    .home_header li {
        display: inline-block;
        padding-left: 16px
    }
    .home_logo {
        float: right;
        margin-right: 26px;
        margin-top: -11px;
    }
</style>
