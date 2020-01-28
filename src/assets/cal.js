// 只负责提供计算的方法，不处理业务逻辑
// 定义方法：
// 加
function add(a, b) {
  return a + b;
}
// 减
function sub(a, b) {
  return a - b;
}
// 乘
function mul(a, b) {
  return a * b;
}
// 除
function div(a, b) {
  // 抛出一个错误
  throw new Error()
  return a / b;
}

// 导出方法：
export default {
  add,
  sub,
  mul,
  div
};
