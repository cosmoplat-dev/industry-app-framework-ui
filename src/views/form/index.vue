<template>
  <div class="app-container">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">
          <line-chart :chart-data="lineChartData1" title="温度" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <line-chart :chart-data="lineChartData2" title="湿度" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineChart from './component/LineChart'
import { Message } from 'element-ui'

const lineData = {
  // 默认展示数据
  data: [
    // 维度X   维度Y   其他维度 ...
    ['2019-11-28T08:14:37.221Z', 4.5],
    ['2019-11-28T08:20:58.728Z', 2.3],
    ['2019-11-28T08:30:40.854Z', 9.5],
    ['2019-11-28T08:40:37.951Z', 8.8]
  ]
}
export default {
  components: {
    LineChart
  },
  data() {
    return {
      lineChartData1: lineData.data,
      lineChartData2: lineData.data,
      socket: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init: function() {
      const path = process.env.VUE_APP_WEBSOCKT_IP
      if (typeof (WebSocket) === 'undefined') {
        alert('您的浏览器不支持socket')
      } else {
        // 实例化socket
        this.socket = new WebSocket(path)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    open: function() {
      console.log('socket连接成功')
      const infoId = this.$route.query.infoId
      this.send(infoId)
    },
    error: function() {
      Message({
        message: 'socket连接失败',
        type: 'error',
        duration: 3 * 1000
      })
    },
    getMessage: function(msg) {
      // 第一次连接返回'连接成功'不需要处理
      if (msg.data.length > 10) {
        // 苦逼的json解析
        const json = JSON.parse(msg.data)
        const jsonResult = json.results[0].series[0].values
        const wendu = []
        const shidu = []
        for (let index = 0; index < jsonResult.length; index++) {
          const element = jsonResult[index]
          const wendu1 = []
          const shidu1 = []
          wendu1.push(element[0])
          shidu1.push(element[0])
          const newJson = JSON.parse(element[2])
          wendu1.push(newJson.dam)
          shidu1.push(newJson.tem)
          wendu[index] = wendu1
          shidu[index] = shidu1
        }
        this.lineChartData1 = wendu
        this.lineChartData2 = shidu
      }
    },
    send: function(infoId) {
      this.socket.send(infoId)
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

