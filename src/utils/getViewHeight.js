//获取浏览器窗口高度,实现calc(100vh -??px)的效果； 处理Element的Table组件的高度问题（height只能是数字或者字符串）
export function getViewHeight() {
  let winHeight = 0;
  if (window.innerHeight) {
    winHeight = window.innerHeight;
  } else if (document.body && document.body.clientHeight) {
    winHeight = document.body.clientHeight;
  } //通过深入Document内部对body进行检测，获取浏览器窗口高度
  if (document.documentElement && document.documentElement.clientHeight) {
    winHeight = document.documentElement.clientHeight;
  }
  return winHeight;
}
