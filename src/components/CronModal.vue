<template>
  <div class="cron-modal">
    <el-dialog
      class="comn_dialog"
      title="cron表达式"
      :visible.sync="visible"
      width="650px"
      top="12vh"
      v-dialogDrag
    >
      <div class="cron-modal_container">
        <el-tabs type="border-card">
          <el-tab-pane label="1">
            <span slot="label"><i class="el-icon-date"></i> 秒</span>
            <el-radio-group v-model="result.second.cronEvery">
              <el-row class="radio-row">
                <el-radio label="1">每一秒钟</el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="2">
                  每隔
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.second.incrementIncrement"
                    :min="1"
                    :max="59"
                  ></el-input>
                  秒执行
                  <span style="margin-left:10px;">从</span>
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.second.incrementStart"
                    :min="0"
                    :max="59"
                  ></el-input>
                  秒开始
                </el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="3">具体秒数(可多选)</el-radio>
                <el-select
                  class="cron-select_width"
                  size="mini"
                  multiple
                  v-model="result.second.specificSpecific"
                >
                  <el-option
                    v-for="(val, index) in 60"
                    :key="index"
                    :value="index"
                    :label="index"
                  ></el-option>
                </el-select>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="4"
                  >周期从
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.second.rangeStart"
                    :min="1"
                    :max="59"
                  ></el-input>
                  到
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.second.rangeEnd"
                    :min="0"
                    :max="59"
                  ></el-input>
                  秒
                </el-radio>
              </el-row>
            </el-radio-group>
          </el-tab-pane>
          <el-tab-pane label="2">
            <span slot="label"><i class="el-icon-date"></i> 分</span>

            <el-radio-group v-model="result.minute.cronEvery">
              <el-row class="radio-row">
                <el-radio label="1">每一分钟</el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="2"
                  >每隔
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.minute.incrementIncrement"
                    :min="1"
                    :max="60"
                  ></el-input>
                  分执行 <span style="margin-left:15px;">从</span>
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.minute.incrementStart"
                    :min="0"
                    :max="59"
                  ></el-input>
                  分开始
                </el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="3">具体分钟数(可多选)</el-radio>
                <el-select
                  class="cron-select_width"
                  size="mini"
                  multiple
                  v-model="result.minute.specificSpecific"
                >
                  <el-option
                    v-for="(val, index) in 60"
                    :key="index"
                    :value="index"
                    :label="index"
                  >
                  </el-option>
                </el-select>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="4"
                  >周期从
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.minute.rangeStart"
                    :min="1"
                    :max="60"
                  ></el-input>
                  到
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.minute.rangeEnd"
                    :min="0"
                    :max="59"
                  ></el-input>
                  分
                </el-radio>
              </el-row>
            </el-radio-group>
          </el-tab-pane>
          <el-tab-pane label="3">
            <span slot="label"><i class="el-icon-date"></i> 时</span>

            <el-radio-group v-model="result.hour.cronEvery">
              <el-row class="radio-row">
                <el-radio label="1">每一小时</el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="2"
                  >每隔
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.hour.incrementIncrement"
                    :min="0"
                    :max="23"
                  ></el-input>
                  小时执行 从
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.hour.incrementStart"
                    :min="0"
                    :max="23"
                  ></el-input>
                  小时开始
                </el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="3">具体小时数(可多选)</el-radio>
                <el-select
                  class="cron-select_width"
                  size="mini"
                  multiple
                  v-model="result.hour.specificSpecific"
                >
                  <el-option
                    v-for="(val, index) in 24"
                    :key="index"
                    :value="index"
                    :label="index"
                  ></el-option>
                </el-select>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="4"
                  >周期从
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.hour.rangeStart"
                    :min="0"
                    :max="23"
                  ></el-input>
                  到
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.hour.rangeEnd"
                    :min="0"
                    :max="23"
                  ></el-input>
                  小时
                </el-radio>
              </el-row>
            </el-radio-group>
          </el-tab-pane>
          <el-tab-pane label="4">
            <span slot="label"><i class="el-icon-date"></i> 天</span>

            <el-radio-group v-model="result.day.cronEvery">
              <el-row class="radio-row">
                <el-radio label="1">每一天</el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="2"
                  >每隔
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.week.incrementIncrement"
                    :min="1"
                    :max="7"
                  ></el-input>
                  周执行 从
                  <el-select
                    class="cron-select_width"
                    size="mini"
                    v-model="result.week.incrementStart"
                  >
                    <el-option
                      v-for="(val, index) in 7"
                      :key="index"
                      :value="index + 1"
                      :label="weekDays[index]"
                    ></el-option>
                  </el-select>
                  开始
                </el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="3"
                  >每隔
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.day.incrementIncrement"
                    :min="1"
                    :max="31"
                  ></el-input>
                  天执行 从
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.day.incrementStart"
                    :min="1"
                    :max="31"
                  ></el-input>
                  天开始
                </el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="4">具体星期几(可多选)</el-radio>
                <el-select
                  class="cron-select_width"
                  size="mini"
                  multiple
                  v-model="result.week.specificSpecific"
                >
                  <el-option
                    v-for="(val, index) in 7"
                    :key="index"
                    :value="index + 1"
                    :label="weekDays[index]"
                  ></el-option>
                </el-select>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="5">具体天数(可多选)</el-radio>
                <el-select
                  class="cron-select_width"
                  size="mini"
                  multiple
                  v-model="result.day.specificSpecific"
                >
                  <el-option
                    v-for="(val, index) in 31"
                    :key="index"
                    :value="index + 1"
                    :label="index + 1"
                  ></el-option>
                </el-select>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="6">在这个月的最后一天</el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="7">在这个月的最后一个工作日</el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="8"
                  >在这个月的最后一个
                  <el-select
                    class="cron-select_width"
                    size="mini"
                    v-model="result.day.cronLastSpecificDomDay"
                  >
                    <el-option
                      v-for="(val, index) in 7"
                      :key="index"
                      :value="index + 1"
                      :label="weekDays[index]"
                    ></el-option>
                  </el-select>
                </el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="9">
                  在本月底前
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.day.cronDaysBeforeEomMinus"
                    :min="1"
                    :max="31"
                  ></el-input>
                  天
                </el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="10"
                  >最近的工作日（周一至周五）至本月
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.day.cronDaysNearestWeekday"
                    :min="1"
                    :max="31"
                  ></el-input>
                  日
                </el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="11"
                  >在这个月的第
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.week.cronNthDayNth"
                    :min="1"
                    :max="5"
                  ></el-input>
                  个
                  <el-select
                    class="cron-select_width"
                    size="mini"
                    v-model="result.week.cronNthDayDay"
                  >
                    <el-option
                      v-for="(val, index) in 7"
                      :key="index"
                      :value="index + 1"
                      :label="weekDays[index]"
                    ></el-option>
                  </el-select>
                </el-radio>
              </el-row>
            </el-radio-group>
          </el-tab-pane>
          <el-tab-pane label="5">
            <span slot="label"><i class="el-icon-date"></i> 月</span>

            <el-radio-group v-model="result.month.cronEvery">
              <el-row class="radio-row">
                <el-radio label="1">每一月</el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="2"
                  >每隔
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.month.incrementIncrement"
                    :min="0"
                    :max="12"
                  ></el-input>
                  月执行 从
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.month.incrementStart"
                    :min="0"
                    :max="12"
                  ></el-input>
                  月开始
                </el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="3">具体月数(可多选)</el-radio>
                <el-select
                  class="cron-select_width"
                  size="mini"
                  multiple
                  v-model="result.month.specificSpecific"
                >
                  <el-option
                    v-for="(val, index) in 12"
                    :key="index"
                    :value="index + 1"
                    :label="index + 1"
                  ></el-option>
                </el-select>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="4"
                  >从
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.month.rangeStart"
                    :min="1"
                    :max="12"
                  ></el-input>
                  到
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.month.rangeEnd"
                    :min="1"
                    :max="12"
                  ></el-input>
                  月之间的每个月
                </el-radio>
              </el-row>
            </el-radio-group>
          </el-tab-pane>
          <el-tab-pane label="6">
            <span slot="label"><i class="el-icon-date"></i> 年</span>

            <el-radio-group v-model="result.year.cronEvery">
              <el-row class="radio-row">
                <el-radio label="1">每一年</el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="2"
                  >每隔
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.year.incrementIncrement"
                    :min="1"
                    :max="99"
                  ></el-input>
                  年执行 从
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.year.incrementStart"
                    :min="2020"
                    :max="2099"
                  ></el-input>
                  年开始
                </el-radio>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="3">具体年份(可多选)</el-radio>
                <el-select
                  class="cron-select_width"
                  size="mini"
                  multiple
                  v-model="result.year.specificSpecific"
                >
                  <el-option
                    v-for="(val, index) in 100"
                    :key="index"
                    :value="2020 + index"
                    :label="2020 + index"
                  ></el-option>
                </el-select>
              </el-row>
              <el-row class="radio-row">
                <el-radio label="4"
                  >从
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.year.rangeStart"
                    :min="2020"
                    :max="2099"
                  ></el-input>
                  到
                  <el-input
                    class="input_from"
                    type="number"
                    size="mini"
                    v-model="result.year.rangeEnd"
                    :min="2020"
                    :max="2099"
                  ></el-input>
                  年之间的每一年
                </el-radio>
              </el-row>
            </el-radio-group>
          </el-tab-pane>
        </el-tabs>
        <div class="cron-value">
          {{ cronStr }}
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="Cancel">取 消</el-button>
        <el-button type="primary" @click="Save">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    cronValue: {
      type: String,
      default() {
        return '* * * * * ? *'; // 默认选中每一个radio-group的第一项
      }
    },
    cronVisible: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      size: 'large',
      weekDays: ['天', '一', '二', '三', '四', '五', '六'].map(
        (val) => '星期' + val
      ),
      result: {
        second: {},
        minute: {},
        hour: {},
        day: {},
        week: {},
        month: {},
        year: {}
      },
      defaultValue: {
        second: {
          cronEvery: '',
          incrementStart: 3,
          incrementIncrement: 5,
          rangeStart: 1,
          rangeEnd: 0,
          specificSpecific: []
        },
        minute: {
          cronEvery: '',
          incrementStart: 3,
          incrementIncrement: 5,
          rangeStart: 1,
          rangeEnd: '0',
          specificSpecific: []
        },
        hour: {
          cronEvery: '',
          incrementStart: 3,
          incrementIncrement: 5,
          rangeStart: '0',
          rangeEnd: '0',
          specificSpecific: []
        },
        day: {
          cronEvery: '',
          incrementStart: 1,
          incrementIncrement: '1',
          rangeStart: '',
          rangeEnd: '',
          specificSpecific: [],
          cronLastSpecificDomDay: 1,
          cronDaysBeforeEomMinus: 1,
          cronDaysNearestWeekday: 1
        },
        week: {
          cronEvery: '',
          incrementStart: 1,
          incrementIncrement: 1,
          specificSpecific: [],
          cronNthDayDay: 1,
          cronNthDayNth: 1
        },
        month: {
          cronEvery: '',
          incrementStart: 3,
          incrementIncrement: 5,
          rangeStart: 1,
          rangeEnd: 1,
          specificSpecific: []
        },
        year: {
          cronEvery: '',
          incrementStart: 2017,
          incrementIncrement: 1,
          rangeStart: 2020,
          rangeEnd: 2020,
          specificSpecific: []
        },
        label: ''
      }
    };
  },
  computed: {
    visible: {
      get() {
        return this.cronVisible;
      },
      set(val) {
        this.$emit('updateCornVisible', val);
      }
    },
    secondsText() {
      let seconds = '';
      let cronEvery = this.result.second.cronEvery || '';
      switch (cronEvery.toString()) {
        case '1':
          seconds = '*';
          break;
        case '2':
          seconds =
            this.result.second.incrementStart +
            '/' +
            this.result.second.incrementIncrement;
          break;
        case '3':
          this.result.second.specificSpecific.map((val) => {
            seconds += val + ',';
          });
          seconds = seconds.slice(0, -1);
          break;
        case '4':
          seconds =
            this.result.second.rangeStart + '-' + this.result.second.rangeEnd;
          break;
      }
      return seconds;
    },
    minutesText() {
      let minutes = '';
      let cronEvery = this.result.minute.cronEvery || '';
      switch (cronEvery.toString()) {
        case '1':
          minutes = '*';
          break;
        case '2':
          minutes =
            this.result.minute.incrementStart +
            '/' +
            this.result.minute.incrementIncrement;
          break;
        case '3':
          this.result.minute.specificSpecific.map((val) => {
            minutes += val + ',';
          });
          minutes = minutes.slice(0, -1);
          break;
        case '4':
          minutes =
            this.result.minute.rangeStart + '-' + this.result.minute.rangeEnd;
          break;
      }
      return minutes;
    },
    hoursText() {
      let hours = '';
      let cronEvery = this.result.hour.cronEvery || '';
      switch (cronEvery.toString()) {
        case '1':
          hours = '*';
          break;
        case '2':
          hours =
            this.result.hour.incrementStart +
            '/' +
            this.result.hour.incrementIncrement;
          break;
        case '3':
          this.result.hour.specificSpecific.map((val) => {
            hours += val + ',';
          });
          hours = hours.slice(0, -1);
          break;
        case '4':
          hours = this.result.hour.rangeStart + '-' + this.result.hour.rangeEnd;
          break;
      }
      return hours;
    },
    daysText() {
      let days = '';
      let cronEvery = this.result.day.cronEvery || '';
      switch (cronEvery.toString()) {
        case '1':
          break;
        case '2':
        case '4':
        case '11':
          days = '?';
          break;
        case '3':
          days =
            this.result.day.incrementStart +
            '/' +
            this.result.day.incrementIncrement;
          break;
        case '5':
          this.result.day.specificSpecific.map((val) => {
            days += val + ',';
          });
          days = days.slice(0, -1);
          break;
        case '6':
          days = 'L';
          break;
        case '7':
          days = 'LW';
          break;
        case '8':
          days = this.result.day.cronLastSpecificDomDay + 'L';
          break;
        case '9':
          days = 'L-' + this.result.day.cronDaysBeforeEomMinus;
          break;
        case '10':
          days = this.result.day.cronDaysNearestWeekday + 'W';
          break;
      }
      return days;
    },
    weeksText() {
      let weeks = '';
      let cronEvery = this.result.day.cronEvery || '';
      switch (cronEvery.toString()) {
        case '1':
        case '3':
        case '5':
          weeks = '?';
          break;
        case '2':
          weeks =
            this.result.week.incrementStart +
            '/' +
            this.result.week.incrementIncrement;
          break;
        case '4':
          this.result.week.specificSpecific.map((val) => {
            weeks += val + ',';
          });
          weeks = weeks.slice(0, -1);
          break;
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
          weeks = '?';
          break;
        case '11':
          weeks =
            this.result.week.cronNthDayDay +
            '#' +
            this.result.week.cronNthDayNth;
          break;
      }
      return weeks;
    },
    monthsText() {
      let months = '';
      let cronEvery = this.result.month.cronEvery || '';
      switch (cronEvery.toString()) {
        case '1':
          months = '*';
          break;
        case '2':
          months =
            this.result.month.incrementStart +
            '/' +
            this.result.month.incrementIncrement;
          break;
        case '3':
          this.result.month.specificSpecific.map((val) => {
            months += val + ',';
          });
          months = months.slice(0, -1);
          break;
        case '4':
          months =
            this.result.month.rangeStart + '-' + this.result.month.rangeEnd;
          break;
      }
      return months;
    },
    yearsText() {
      let years = '';
      let cronEvery = this.result.year.cronEvery || '';
      switch (cronEvery.toString()) {
        case '1':
          years = '*';
          break;
        case '2':
          years =
            this.result.year.incrementStart +
            '/' +
            this.result.year.incrementIncrement;
          break;
        case '3':
          this.result.year.specificSpecific.map((val) => {
            years += val + ',';
          });
          years = years.slice(0, -1);
          break;
        case '4':
          years = this.result.year.rangeStart + '-' + this.result.year.rangeEnd;
          break;
      }
      return years;
    },
    cronStr() {
      return `${this.secondsText || '*'} ${this.minutesText || '*'} ${this
        .hoursText || '*'} ${this.daysText || '*'} ${this.monthsText ||
        '*'} ${this.weeksText || '?'} ${this.yearsText || '*'}`;
    }
  },
  watch: {
    visible: {
      handler() {
        let label = this.cronValue;
        if (label) {
          this.secondsReverseExp(label);
          this.minutesReverseExp(label);
          this.hoursReverseExp(label);
          this.daysReverseExp(label);
          this.daysReverseExp(label);
          this.monthsReverseExp(label);
          this.yearReverseExp(label);
          JSON.parse(JSON.stringify(label));
        } else {
          this.result = JSON.parse(JSON.stringify(this.defaultValue));
        }
      }
    }
  },
  methods: {
    Cancel() {
      this.$emit('resetCornPopup');
    },
    Save() {
      this.$emit('submitCornPopup', this.cronStr);
    },
    secondsReverseExp(seconds) {
      let val = seconds.split(' ')[0];
      let second = {
        cronEvery: '',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 0,
        specificSpecific: []
      };
      switch (true) {
        case val.includes('*'):
          second.cronEvery = '1';
          break;
        case val.includes('/'):
          second.cronEvery = '2';
          second.incrementStart = val.split('/')[0];
          second.incrementIncrement = val.split('/')[1];
          break;
        case val.includes(','):
          second.cronEvery = '3';
          second.specificSpecific = val
            .split(',')
            .map(Number)
            .sort();
          break;
        case val.includes('-'):
          second.cronEvery = '4';
          second.rangeStart = val.split('-')[0];
          second.rangeEnd = val.split('-')[1];
          break;
        default:
          second.cronEvery = '1';
      }
      this.result.second = second;
    },
    minutesReverseExp(minutes) {
      let val = minutes.split(' ')[1];
      let minute = {
        cronEvery: '',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 0,
        specificSpecific: []
      };
      switch (true) {
        case val.includes('*'):
          minute.cronEvery = '1';
          break;
        case val.includes('/'):
          minute.cronEvery = '2';
          minute.incrementStart = val.split('/')[0];
          minute.incrementIncrement = val.split('/')[1];
          break;
        case val.includes(','):
          minute.cronEvery = '3';
          minute.specificSpecific = val
            .split(',')
            .map(Number)
            .sort();
          break;
        case val.includes('-'):
          minute.cronEvery = '4';
          minute.rangeStart = val.split('-')[0];
          minute.rangeEnd = val.split('-')[1];
          break;
        default:
          minute.cronEvery = '1';
      }
      this.result.minute = minute;
    },
    hoursReverseExp(hours) {
      let val = hours.split(' ')[2];
      let hour = {
        cronEvery: '',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: '0',
        specificSpecific: []
      };
      switch (true) {
        case val.includes('*'):
          hour.cronEvery = '1';
          break;
        case val.includes('/'):
          hour.cronEvery = '2';
          hour.incrementStart = val.split('/')[0];
          hour.incrementIncrement = val.split('/')[1];
          break;
        case val.includes(','):
          hour.cronEvery = '3';
          hour.specificSpecific = val
            .split(',')
            .map(Number)
            .sort();
          break;
        case val.includes('-'):
          hour.cronEvery = '4';
          hour.rangeStart = val.split('-')[0];
          hour.rangeEnd = val.split('-')[1];
          break;
        default:
          hour.cronEvery = '1';
      }
      this.result.hour = hour;
    },
    daysReverseExp(cron) {
      let days = cron.split(' ')[3];
      let weeks = cron.split(' ')[5];
      let day = {
        cronEvery: '',
        incrementStart: 1,
        incrementIncrement: 1,
        rangeStart: 1,
        rangeEnd: 1,
        specificSpecific: [],
        cronLastSpecificDomDay: 1,
        cronDaysBeforeEomMinus: 1,
        cronDaysNearestWeekday: 1
      };
      let week = {
        cronEvery: '',
        incrementStart: 1,
        incrementIncrement: 1,
        specificSpecific: [],
        cronNthDayDay: 1,
        cronNthDayNth: '1'
      };
      if (!days.includes('?')) {
        switch (true) {
          case days.includes('*'):
            day.cronEvery = '1';
            break;
          case days.includes('?'):
            // 2、4、11
            break;
          case days.includes('/'):
            day.cronEvery = '3';
            day.incrementStart = days.split('/')[0];
            day.incrementIncrement = days.split('/')[1];
            break;
          case days.includes(','):
            day.cronEvery = '5';
            day.specificSpecific = days
              .split(',')
              .map(Number)
              .sort();
            // day.specificSpecific.forEach(function (value, index) {
            //   day.specificSpecific[index] = value -1;
            // });
            break;
          case days.includes('LW'):
            day.cronEvery = '7';
            break;
          case days.includes('L-'):
            day.cronEvery = '9';
            day.cronDaysBeforeEomMinus = days.split('L-')[1];
            break;
          case days.includes('L'):
            if (days.len == 1) {
              day.cronEvery = '6';
              day.cronLastSpecificDomDay = '1';
            } else {
              day.cronEvery = '8';
              day.cronLastSpecificDomDay = Number(days.split('L')[0]);
            }
            break;
          case days.includes('W'):
            day.cronEvery = '10';
            day.cronDaysNearestWeekday = days.split('W')[0];
            break;
          default:
            day.cronEvery = '1';
        }
      } else {
        switch (true) {
          case weeks.includes('/'):
            day.cronEvery = '2';
            week.incrementStart = weeks.split('/')[0];
            week.incrementIncrement = weeks.split('/')[1];
            break;
          case weeks.includes(','):
            day.cronEvery = '4';
            week.specificSpecific = weeks
              .split(',')
              .map(Number)
              .sort();
            break;
          case '#':
            day.cronEvery = '11';
            week.cronNthDayDay = weeks.split('#')[0];
            week.cronNthDayNth = weeks.split('#')[1];
            break;
          default:
            day.cronEvery = '1';
            week.cronEvery = '1';
        }
      }
      this.result.day = day;
      this.result.week = week;
    },
    monthsReverseExp(cron) {
      let months = cron.split(' ')[4];
      let month = {
        cronEvery: '',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 1,
        specificSpecific: []
      };
      switch (true) {
        case months.includes('*'):
          month.cronEvery = '1';
          break;
        case months.includes('/'):
          month.cronEvery = '2';
          month.incrementStart = months.split('/')[0];
          month.incrementIncrement = months.split('/')[1];
          break;
        case months.includes(','):
          month.cronEvery = '3';
          month.specificSpecific = months
            .split(',')
            .map(Number)
            .sort();
          break;
        case months.includes('-'):
          month.cronEvery = '4';
          month.rangeStart = months.split('-')[0];
          month.rangeEnd = months.split('-')[1];
          break;
        default:
          month.cronEvery = '1';
      }
      this.result.month = month;
    },
    yearReverseExp(cron) {
      let years = cron.split(' ')[6];
      let year = {
        cronEvery: '',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 2020,
        rangeEnd: 2020,
        specificSpecific: []
      };
      switch (true) {
        case years.includes('*'):
          year.cronEvery = '1';
          break;
        case years.includes('/'):
          year.cronEvery = '2';
          year.incrementStart = years.split('/')[0];
          year.incrementIncrement = years.split('/')[1];
          break;
        case years.includes(','):
          year.cronEvery = '3';
          year.specificSpecific = years
            .split(',')
            .map(Number)
            .sort();
          break;
        case years.includes('-'):
          year.cronEvery = '4';
          year.rangeStart = years.split('-')[0];
          year.rangeEnd = years.split('-')[1];
          break;
        default:
          year.cronEvery = '1';
      }
      this.result.year = year;
    }
  }
};
</script>
<style lang="scss">
.cron-modal {
  .radio-row {
    margin-top: 12px;
  }
  .input_from,
  .input_to {
    width: 150px;
    margin: 0 6px 0 6px;
  }
  .cron-select_width {
    width: 155px;
  }
  .cron-value {
    text-align: center;
    margin-top: 20px;
    color: #006fb6;
    font-size: 18px;
    font-weight: 600;
  }
  .cron-modal_container {
    padding: 30px;
  }
}
</style>
