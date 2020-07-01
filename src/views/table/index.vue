<template>
  <div class="app-container">
    <el-row :gutter="20">
      <p>设备列表</p>
      <el-col
        v-for="item in list"
        :key="item.id"
        :xs="24"
        :sm="12"
        :md="12"
        :lg="12"
        :xl="4"
        class=""
      >
        <info-card
          :machine-ip.sync="item.machineIp"
          :machine-number.sync="item.machineNumber"
          :machine-mark.sync="item.machineMark"
          @viewInfo="viewInfo(item.machineNumber)"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import InfoCard from './component/InfoCard'

export default {
  components: {
    InfoCard
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    viewInfo(machineNumber) {
      this.$router.push(
        { path: '/form/index',
          query: {
            infoId: machineNumber
          }
        }
      )
    }
  }
}
</script>
