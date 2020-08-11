<template>
    <div class="content_VIP">
        <span class="VIP">VIP客户定制</span>
        <div class="content_con">
            <h1>基于智能算法的资产配置</h1>
            <div class="content_text">
                <span class="text">我们将基于您自身的年龄、家庭状况、财务情况、风险偏好
                理财目标等信息依据现代投资组合理论、效用函数理论、行
                为金融学理论等基础，应用一系列智能算法为您量身定制打造
                资产配置方案，并对投资组合进行实时跟踪和自动再平衡</span>
            </div>
            <table class="content_select">
                <tr>
                    <td>
                        <span>投资年限：</span>
                        <select style="width: 71px;">
                            <option>1年以下</option>
                            <option>1-5年</option>
                            <option>5-10年</option>
                            <option>10年以上</option>
                        </select>
                    </td>
                    <td style="padding-left:20px">
                        <span>投资金额：</span>
                        <select style="width: 80px;">
                            <option>30万以下</option>
                            <option>30-100万</option>
                            <option>100-500万</option>
                            <option>500万以上</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>投资风格：</span>
                        <select style="width: 52px;">
                            <option>激进</option>
                            <option>稳健</option>-
                            <option>保守</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
            </table>
            <div class="content-button">
                <div>
                    <el-button type="primary">一键生成</el-button>
                </div>
                <div class="content_test">
                    <el-button type="primary" plain>高端测评</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'homeContentLeft'
}
</script>
<style scoped>
    .content_VIP {
        margin-top: 80px;
        width: 48%;
        float: left;
    }
    .VIP {
        color: #54a7fb;
        margin-left: 43px;
        font-size: 16px;
    }
    .content_con {
        margin-top: 70px;
        padding-left: 82px;
    }
    .content_con h1 {
        font-size: 25px;
    }
    .content_text .text{
        width: 323px;
        display: block;
        font-size: 12px;
        color: #b3afaf;
    }
    .content_select {
        font-size: 14px;
        margin-top: 20px;
    }
    .content_select tr {
        height: 50px;
    }
    .content_select span{
        color: #54a7fb;
    }
    .content_select select{
        color: #8e8a8a;
        border-color: #d4cdcd;
        height: 25px;
    }
    .el-button {
        padding-top: 8px;
        padding-bottom: 8px;
        width: 310px;
    }
    .content-button {
        margin-top: 20px;
    }
    .content_test{
        margin-top: 15px;
    }
    .content_test span {
        color: #519eff;
    }
    .is-plain {
        background: #ffffff;
    }
</style>
