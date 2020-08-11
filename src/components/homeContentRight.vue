<template>
  <div class="pie">
    <div class="pie_chart" ref="pie_charts">
    </div>
    <div>
      <div class="rule_block">
        <ul class="rule_title">
          <li>平衡2号</li>
          <li>历史年化收益：9.24%</li>
          <li>波动率：5.3%</li>
        </ul>
        <div class="rule_div"></div>
          <el-slider v-model="value" :step="1" :max="10" :min="1" @change="changeData">
          </el-slider>
        </div>
        <div class="rule_con">
          <ul class="rule_scale">
            <li v-for="(scale,index) in scales" :key="scale" :class="[rule_scale, {isScale:(index+1) == value}]"></li>
          </ul>
          <ul class="rule_number">
            <li v-for="(num,index) in scales" ref="num" :key="num" :class="[rule_num, {isNumber:(index+1) == value}]">
            {{ num }}.0
            </li>
          </ul>
          <div>
            <span class="samll">保守型</span>
            <span class="big">激进型</span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'homeContentRight',
  data () {
    return {
      value: 5,
      scales: 10,
      rule_scale: 'rule_scale_li',
      rule_num: 'rule_number_li',
      isScale: false,
      title: '稳健型',
      chartInstance: null,
      chartData: [
        {
          name: '黄金',
          value: '50000'
        },
        {
          name: '美股',
          value: '50000'
        },
        {
          name: '港股',
          value: '10000'
        },
        {
          name: '主板',
          value: '20000'
        },
        {
          name: '债券',
          value: '80000'
        },
        {
          name: '基金',
          value: '30000'
        }
      ]
    }
  },
  mounted () {
    this.initChart()
    this.getData()
  },
  methods: {
    changeData () {
      if (this.value <= 4) {
        this.title = '保守型'
      } else if (this.value === 10) {
        this.title = '激进型'
      } else {
        this.title = '稳健型'
      }
      this.getData()
    },
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.pie_charts)
    },
    getData () {
      this.upDateChart()
    },
    upDateChart () {
      const option = {
        title: {
          text: this.title,
          left: 'center',
          top: '52%',
          textStyle: {
            color: '#aaa',
            fontSize: 14,
            align: 'center'
          }
        },
        emphasis: {
          show: false
        },
        graphic: {
          type: 'text',
          left: 'center',
          top: '45%',
          style: {
            text: '风险偏好\n' + this.value,
            textAlign: 'center',
            fill: 'black',
            fontSize: 15
          }
        },
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['20%', '50%'],
            data: this.chartData,
            label: {
              show: true,
              formatter: function (arg) {
                return arg.name + ':' + arg.percent + '%'
              }
            }
          }
        ]
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>
<style>
.pie {
  float: right;
  width: 52%;
}
.pie_chart {
  width: 447px;
  height: 400px;
}
.rule_block {
  width: 426px;
  color: #a7a7a7;
}
.el-slider__runway {
  height: 16px;
  margin: 1px 52px;
}
.el-slider__bar {
  background-color: #E4E7ED;
}
.el-slider__button {
  margin-top: 7px;
  height: 30px;
  border: 1px solid #b7b6b6;
  border-radius: 10%;
  background-color: #ececec;
}
.rule_scale {
  padding: 0 0;
  margin-left: -44px;
  margin-top: 4px;
  margin-bottom: 0;
}
.rule_scale_li {
  display: inline-block;
  border: 1px solid #afaeae;
  height: 4px;
  margin-left: 45px;
}
.rule_number {
  padding: 0 0;
  margin-left: -38px;
  margin-top: 0;
  margin-bottom: 0;
}
.rule_number_li {
  display: inline-block;
  height: 4px;
  margin-left: 30px;
  font-size: 12px;
}
.rule_div {
    width: 514px;
    height: 16px;
    position: absolute;
    background-color: #E4E7ED;
    border: 1px solid #cccccc;
    border-radius: 3px;
}
.rule_con {
  margin-left: 52px;
  color: #a7a7a7;
}
.rule_title li{
  display: inline-block;
  margin-left: 20px;
}
.isScale {
  border: 1px solid red;
}
.isNumber {
  color: red;
}
.samll {
  margin-left: -18px;
}
.big {
  margin-left: 370px;
}
</style>
