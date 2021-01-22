// 将标准时间格式，如 new Date () 格式转为 年月日，时分秒格式
import dayjs from 'dayjs';
export function formatDateTime(date) {
  let dayjsTime = dayjs(`${date}`).format('YYYY-MM-DD HH:mm:ss');
  return dayjsTime;
}

// 如 120000秒，转为 ‘ 1天9小时20分0秒 ’
export function diffTimeStr(second_time) {
  var time = parseInt(second_time) + '秒';
  if (parseInt(second_time) > 60) {
    var second = parseInt(second_time) % 60;
    var min = parseInt(second_time / 60);
    time = min + '分' + second + '秒';

    if (min <= 60) return time;
    min = parseInt(second_time / 60) % 60;
    var hour = parseInt(parseInt(second_time / 60) / 60);
    time = hour + '小时' + min + '分' + second + '秒';

    if (hour > 24) {
      hour = parseInt(parseInt(second_time / 60) / 60) % 24;
      var day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24);
      time = day + '天' + hour + '小时' + min + '分' + second + '秒';
    }
  }
  return time;
}

// 获取相差的秒数,两个时间字符串相差的秒数，如 "2021-01-15T14:44:40.263+08:00" 和 "2021-01-15T14:44:00.001+08:00",相差 40秒
export function diffSecond(start, end) {
  const startTime = new Date(start);
  const endTime = new Date(end);
  const second_time = Math.abs(startTime - endTime) / 1000; // 得到相差的秒数
  return second_time;
}
// diffSecondByDayjs('2021-01-15T14:44:40.263+08:00','2021-01-15T14:44:00.001+08:00'); // 40
// diffSecondByDayjs('2021-01-15 15:26:30','2021-01-15 15:26:45'); // 15
export function diffSecondByDayjs(start, end) {
  const date1 = dayjs(start);
  const date2 = dayjs(end);
  let diffTime = Math.abs(date1.diff(date2, 'second')); //获取两个时间对象相差的秒数，取绝对值。要查相差天数，第二个参数传day
  return diffTime;
}
