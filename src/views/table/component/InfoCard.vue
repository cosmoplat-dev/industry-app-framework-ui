<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span class="spointer" @click="viewInfo(machineNumber)">{{ machineNumber }}</span>
    </div>
    <div class="text item">
      设备IP：{{ machineIp }}
    </div>
    <div class="text item">
      设备标识码：{{ machineMark }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    machineIp: { type: String, default: '' },
    machineNumber: { type: String, default: '' },
    machineMark: { type: String, default: '' },
    loading: { type: Boolean, default: false }
  },
  data() {
    return {
      loadingStatus: this.loading
    }
  },
  methods: {
    viewInfo(machineNumber) {
      this.$emit('viewInfo', machineNumber)
    }
  }
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix {
    text-align:center;
    content: "";
  }

  .spointer {
    display: inline-block;
    min-width: 20px;
    margin: 16px 6px 0 0;
    text-align: center;
    color: #3F88D3;
    font-size: 28px;
    cursor:pointer;
  }
</style>
