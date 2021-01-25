<template>
  <div class="base-table">
    <div class="comn_layout">
      <div class="bd_right">
        <p class="comn_title">
          基础信息管理
        </p>
        <div class="mga20">
          <comn-btn :btns="btns" @handleClickBtn="handleClickBtn"></comn-btn>
        </div>

        <div class="table-container">
          <el-table
            ref="multipleTable"
            v-loading="isLoading"
            :data="tableData"
            border
            element-loading-text="加载中..."
            :highlight-current-row="true"
            :height="tableHgt"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              type="selection"
              width="55"
              align="center"
            ></el-table-column>

            <el-table-column
              prop="name"
              label="用户名"
              width="150"
              align="center"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column label="状态" align="center">
              <template v-slot="scope">
                <el-tag v-if="filterFlag(scope.row.status)" type="success"
                  >成功</el-tag
                >
                <el-tag v-else type="danger">失败</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="头像(查看大图)" align="center">
              <template v-slot="scope">
                <el-image
                  class="table-td-thumb"
                  :src="scope.row.thumb"
                  :preview-src-list="[scope.row.thumb]"
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>

            <el-table-column label="操作时间" align="center">
              <template v-slot="scope">
                {{ filterDate(scope.row.date) }}
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <button
                  class="download_btn mr10"
                  @click="handleClickRow(scope.row)"
                >
                  <i class="el-icon-edit"></i> 修改
                </button>
                <button class="detail_btn " @click="handleClickRow(scope.row)">
                  <i class="el-icon-delete"></i> 删除
                </button>
              </template>
            </el-table-column>
          </el-table>

          <comn-pagination
            :total="myPages.total"
            :limit.sync="myPages.pageSize"
            :page.sync="myPages.currentPage"
            :hidden="myPages.total <= 0"
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange"
            @handleRefreshTable="handleRefreshTable"
          ></comn-pagination>
        </div>
      </div>
    </div>

    <el-dialog
      v-dialogDrag
      class="comn_dialog"
      :title="popupTitle"
      :visible.sync="centerDialogVisible"
      :width="popupWidth"
      :top="popupTop"
      :close-on-click-modal="false"
    >
      <template v-if="filterAddUpdate(popupTitle)">
        <el-form
          ref="FormInAddPopup"
          :model="FormInAddPopup"
          :rules="rules"
          :inline="true"
          label-width="115px"
        >
          <el-form-item label="用户名：" prop="name">
            <el-input
              v-model="FormInAddPopup.name"
              type="text"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="地址：" prop="address">
            <el-input
              v-model="FormInAddPopup.address"
              type="text"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-table
          :data="tableInOuterP"
          border
          :highlight-current-row="true"
          :height="250"
          tooltip-effect="dark"
        >
          <el-table-column
            prop="name"
            label="用户名"
            show-overflow-tooltip
            align="center"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            align="center"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column v-if="!isViewDtl" label="操作" align="center">
            <template v-slot="scope">
              <button class="detail_btn" @click="delTheRow(scope.row)">
                <i class="el-icon-edit"></i> 删除
              </button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <template v-else>
        <p class="enable_font">
          <i class="el-icon-info"></i>
          <span
            >确定要
            <em class="operate_font">{{ popupTitle }}</em>
            选中数据吗？</span
          >
        </p>
      </template>
      <span v-if="!isViewDtl" slot="footer" class="dialog-footer">
        <el-button @click="resetPopupData">取 消</el-button>
        <el-button type="primary" @click="submitPopupData">确定</el-button>
      </span>
      <span v-if="isViewDtl" slot="footer" class="dialog-footer">
        <el-button type="primary" @click="resetPopupData">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchData } from '@/request/BaseTable.js';
import { formatDateTime } from '@/utils/formatDateTime.js';
export default {
  inject: ['reload'],
  data() {
    return {
      btns: [],
      tableData: [],
      tableInfo: {
        pageNum: 1,
        pageSize: 10
      },

      multipleSelection: [],
      isLoading: false,
      myPages: {
        pageSize: 10,
        pageNum: 1,
        pages: 3,
        total: 30
      },
      tableInOuterP: [], // 规则表格

      centerDialogVisible: false,
      popupTitle: '',
      FormInAddPopup: {
        name: '', // 用户名
        address: '' // 地址
      },
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        address: [{ required: true, message: '地址不能为空', trigger: 'blur' }]
      },
      ruleVisible: false, // 选规则的弹框 显示与否
      tableHeight: ''
    };
  },
  computed: {
    tableHgt() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.tableHeight = this.$getViewHeight() - 325;
      return this.tableHeight;
    },
    popupWidth() {
      return this.filterAddUpdate(this.popupTitle) ? '720px' : '415px';
    },
    popupTop() {
      return this.filterAddUpdate(this.popupTitle) ? '15vh' : '23vh';
    },
    currRuleLis() {
      // 修改的时候，选中的规则列表，用于规则表格数据的回显
      return this.tableInOuterP;
    },
    isViewDtl() {
      return this.popupTitle === '查看详情' ? true : false;
    }
  },
  mounted() {
    this.btns = this.$getOperateInfo('THE_EXAMPLE');
    this.getData(this.tableInfo);

    window.onresize = () => {
      this.tableHeight = this.$getViewHeight() - 325;
    };
  },
  methods: {
    cancelFormValidate(formName) {
      if (this.$refs[formName]) {
        this.$refs[formName].clearValidate();
      }
    },
    handleClickBtn(val) {
      this.popupTitle = val.name;
      switch (val.value) {
        case 'add':
          this.clickAddBtn();
          break;
        case 'del':
          this.clickDelBtn();
          break;
        default:
          this.clickEditOrViewBtn();
          break;
      }
    },
    clickAddBtn() {
      this.resetPopupData();
      this.centerDialogVisible = true;
    },
    clickEditOrViewBtn() {
      let len = this.multipleSelection.length;
      if (len === 1) {
        this.centerDialogVisible = true;
        this.getRulePjctDetail(this.multipleSelection[0].id);
      } else {
        len > 1
          ? this.$message.warning(`${this.popupTitle}操作，只能选择一条数据`)
          : this.$message.warning(`请选择要${this.popupTitle}的数据`);
      }
    },
    clickDelBtn() {
      this.multipleSelection.length > 0
        ? (this.centerDialogVisible = true)
        : this.$message.warning(`请选择要删除的数据`);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClickRow(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      this.$set(this.tableInfo, 'pageSize', val);
      this.getData(this.tableInfo);
    },
    handleCurrentChange(val) {
      this.$set(this.tableInfo, 'pageNum', val);
      this.getData(this.tableInfo);
    },
    handleRefreshTable(val) {
      this.$set(this.tableInfo, 'pageNum', val.current);
      this.$set(this.tableInfo, 'pageSize', val.pageSize);
      this.getData(this.tableInfo);
    },
    resetPopupData() {
      this.tableInOuterP = [];
      this.FormInAddPopup = {};
      this.centerDialogVisible = false;
      this.cancelFormValidate('FormInAddPopup');
    },
    submitPopupData() {
      let name = this.popupTitle;
      if (name === '删除') {
        let ids = this.multipleSelection.map((val) => val.id).toString();
        this.getRulePjctDel(ids);
        return false;
      }
      this.$refs.FormInAddPopup.validate((valid) => {
        if (!valid) return false;
        //  添加或修改
        let rids = this.tableInOuterP.map((val) => val.id).toString();
        let info = {
          isTemplate: 1,
          name: this.FormInAddPopup.name,
          address: this.FormInAddPopup.address,
          ruleIds: rids
        };
        if (name === '添加') {
          this.getRulePjctAdd(info);
        } else {
          info['id'] = this.FormInAddPopup.id; // 比添加多一个必传的参，id
          this.getRulePjctEdit(info);
        }
      });
    },
    delTheRow(row) {
      // let index = this.tableInOuterP.findIndex((ele) => ele.id === row.id);
      // this.tableInOuterP.splice(index, 1);
      this.tableInOuterP = this.tableInOuterP.filter(
        (ele) => ele.id !== row.id
      );
    },
    getData(info) {
      fetchData(info)
        .then((res) => {
          // console.log(res);
          this.tableData = res.list;
          this.$set(this.myPages, 'total', res.pageTotal);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getRulePjctAdd(info) {
      this.$message.success('添加成功');
      this.reload();
    },
    getRulePjctDetail(id) {
      // 获取详情，回显数据
      // this.FormInAddPopup = res.result;
      this.tableInOuterP = [
        {
          name: '新用户-1',
          address: '四川成都'
        }
      ];
    },
    getRulePjctEdit(info) {
      this.$message.success('修改成功');
      this.reload();
    },
    getRulePjctDel(ids) {
      this.$message.success('删除成功');
      this.reload();
    },
    filterDate(date) {
      return date && formatDateTime(date);
    },
    filterFlag(status) {
      return status === 1 ? '成功' : '失败';
    }
  }
};
</script>
<style lang="scss">
.base-table {
  .table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
  }
  //表格中的操作栏样式
  .download_btn {
    background: #409eff;
    border: 1px solid #409eff;
    color: #fff;
    padding: 2px;
    cursor: pointer;
  }
  .detail_btn {
    // warning : #ffb800;
    background: #f56c6c;
    border: 1px solid #f56c6c;
    color: #fff;
    padding: 2px;
    cursor: pointer;
    margin-left: 10px;
  }
  //删除等确认框中的style
  .enable_font {
    padding: 20px;
    position: relative;
    i {
      font-size: 30px;
      margin-right: 10px;
      color: #e6a23c;
    }
    span {
      font-size: 16px;
      color: #333;
      letter-spacing: 1px;
      position: absolute;
      top: 36%;
    }
  }
  .operate_font {
    letter-spacing: 2px;
    color: #ff6347;
    font-size: 16px;
    font-weight: 600;
  }
  .table-container {
    margin: 0 20px 10px 20px;
  }
  .bd_right {
    border: 1px solid $border_color;
  }
}
</style>
