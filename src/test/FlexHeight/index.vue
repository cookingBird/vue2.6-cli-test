<template>
  <div class="flex flex-col flex-grow pt-1 bg-red-400">
    <div class="flex-grow">
      <el-table
        class="h-full table-wrapper-fix"
        :data="tableData"
        v-full
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300"
          align="center">
        </el-table-column>
      </el-table>
    </div>
    <div class="flex-grow-0">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    inject: [],
    props: {},
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
        // tableData: []
      };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    updated() {},
    beforeDestroy() {},
    methods: {
      handleHeight(entry) {
        console.log('entry', entry);
        console.log('entry', getComputedStyle(entry.target).margin);
        console.log('entry', getComputedStyle(entry.target).marginTop);
        console.log('entry', getComputedStyle(entry.target).marginBottom);
        // const targetStyle = getComputedStyle(entry.target);
        // const mt = targetStyle.marginTop;
        // const mb = targetStyle.marginBottom;
        // entry.target.style.height = `calc(100% - ${mt} - ${mb})`
      },
    },
  };
</script>
<style lang="css">
  .table-wrapper-fix .el-table__body-wrapper {
    height: 100%;
  }
</style>
