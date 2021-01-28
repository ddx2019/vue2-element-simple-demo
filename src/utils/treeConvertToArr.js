// 将树形菜单转为一维数组
export function treeConvertToArr(tree) {
  if (!tree.length) throw new Error("树形菜单不能为空");
  let arrs = [];
  let result = [];
  arrs = arrs.concat(tree);
  while (arrs.length) {
    let first = arrs.shift(); // 弹出第一个元素
    if (first.children) {
      //如果有children
      arrs = arrs.concat(first.children); // 将children数组连接到arrs上
      delete first["children"];
    }
    result.push(first);
  }
  return result;
}
