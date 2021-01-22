<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height:252px;">
          <div class="user-info">
            <img src="../../assets/img/img.jpg" class="user-avator" alt />
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>2019-11-01</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>东莞</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height:252px;">
          <div slot="header" class="clearfix">
            <span>语言详情</span>
          </div>
          Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress
          >JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>CSS
          <el-progress :percentage="13.7"></el-progress>HTML
          <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-user grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">12345</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-bell grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">678</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-shopping-bag-2 grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">910</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height:403px;">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >添加</el-button
            >
          </div>
          <el-table :show-header="false" :data="todoList" style="width:100%;">
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div
                  class="todo-item"
                  :class="{ 'todo-item-del': scope.row.status }"
                >
                  {{ scope.row.title }}
                </div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <template>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <!-- <schart
            v-show="false"
            ref="bar"
            class="schart"
            canvasId="bar"
            :options="options"
          ></schart> -->
          <div class="schart" ref="statusChart"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <!-- <schart
            v-show="false"
            ref="line"
            class="schart"
            canvasId="line"
            :options="options2"
          ></schart> -->
          <div class="schart" ref="pieDoughnut"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import Schart from 'vue-schart';
var echarts = require('echarts');
import dayjs from 'dayjs';
import { DATASET_SIMPLE, PIE_DOUGHNUT } from '@/enums/echartsOption.js';
export default {
  name: 'dashboard',
  data() {
    return {
      name: localStorage.getItem('ms_username'),
      todoList: [
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要写100行代码加几个bug吧',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: true
        },
        {
          title: '今天要写100行代码加几个bug吧',
          status: true
        }
      ],

      // options: {
      //   type: 'bar',
      //   title: {
      //     text: '最近一周各品类销售图'
      //   },
      //   xRorate: 25,
      //   labels: ['周一', '周二', '周三', '周四', '周五'],
      //   datasets: [
      //     {
      //       label: '家电',
      //       data: [234, 278, 270, 190, 230]
      //     },
      //     {
      //       label: '百货',
      //       data: [164, 178, 190, 135, 160]
      //     },
      //     {
      //       label: '食品',
      //       data: [144, 198, 150, 235, 120]
      //     }
      //   ]
      // },
      // options2: {
      //   type: 'line',
      //   title: {
      //     text: '最近几个月各品类销售趋势图'
      //   },
      //   labels: ['6月', '7月', '8月', '9月', '10月'],
      //   datasets: [
      //     {
      //       label: '家电',
      //       data: [234, 278, 270, 190, 230]
      //     },
      //     {
      //       label: '百货',
      //       data: [164, 178, 150, 135, 160]
      //     },
      //     {
      //       label: '食品',
      //       data: [74, 118, 200, 235, 90]
      //     }
      //   ]
      statusChart: '',
      pieDoughnut: '',
      statusOption: {},
      rTypeOption: {}
      // }
    };
  },
  components: {
    // Schart
  },
  computed: {
    role() {
      return this.name === 'admin' ? '超级管理员' : '普通用户';
    }
  },
  mounted() {
    this.setChartOption();
    this.initChart();
  },
  methods: {
    diffDay(start, end) {
      // 获取时间差，相差的天数
      const date1 = dayjs(start);
      const date2 = dayjs(end);
      let diffTime = Math.abs(date1.diff(date2, 'second')); //获取两个时间对象相差的天数，取绝对值。
      return diffTime;
    },
    setChartOption() {
      this.statusOption = JSON.parse(JSON.stringify(DATASET_SIMPLE));
      this.rTypeOption = JSON.parse(JSON.stringify(PIE_DOUGHNUT));
    },
    initChart() {
      // 初始化图表之前，可从后台获取数据，设置到图表的options中
      this.statusChart = echarts.init(this.$refs['statusChart']);
      this.statusChart.setOption(this.statusOption, true);
      this.pieDoughnut = echarts.init(this.$refs['pieDoughnut']);
      this.pieDoughnut.setOption(this.rTypeOption, true);
      window.addEventListener('resize', this.refreshEcharts);
    },
    refreshEcharts() {
      //窗口放大缩小的时候，刷新图表
      const that = this;
      window.addEventListener('resize', function() {
        that.statusChart.resize();
        that.pieDoughnut.resize();
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.refreshEcharts);
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 300px;
}
</style>
