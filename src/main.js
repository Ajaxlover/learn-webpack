// 负责完成计算的逻辑
// 导入
import calc from "@/assets/cal";
// 导入 样式
import "@/style/index";
// 导入 less
import "@/style/less.less";
// 导入 sass
import "@/style/sass.scss";
// 导入 bootstrap 中的样式
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// 导入 Vue
import Vue from "vue";
// 导入 App.vue
import App from "./App";

// 得到当前页面中的所有元素
var i1 = document.querySelector("#i1");
var i2 = document.querySelector("#i2");
var i3 = document.querySelector("#i3");
// 得到符号
var sel = document.querySelector("#sel");
// 得到按钮
var btn = document.querySelector("#btn");

// ES56 语法
let name = "xjj";
let age = 19;
let obj = {
  name,
  age,
  sayHi() {
    console.log(this.name);
  }
};

obj.sayHi();

// 添加计算方法
btn.onclick = function() {
  // 得到 i1 与 i2 的值
  let v1 = +i1.value;
  let v2 = +i2.value;
  // 得到运算符号
  let smp = sel.value;
  // 定义结果
  let result = 0;
  // 判断
  switch (smp) {
    case "0":
      result = calc.add(v1, v2);
      break;
    case "1":
      result = calc.sub(v1, v2);
      break;
    case "2":
      result = calc.mul(v1, v2);
      break;
    case "3":
      result = calc.div(v1, v2);
      break;
  }
  // 赋值
  i3.value = result;
};

new Vue({
  el: "#app",
  render: h => h(App)
});
