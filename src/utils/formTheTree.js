// 注意：目前传入的数据没有hasChildren这个字段，hasChildren只是一个循环的终止条件

function getChilds(id, array) {
  let childs = [];
  array.forEach((val) => {
    if (id === val.parentId) {
      childs.push({
        id: val.id,
        label: val.name
      });
    }
  });
  childs.forEach((childNode) => {
    let currNode = getChilds(childNode.id, array);
    if (currNode.length > 0) {
      childNode.children = currNode;
    }
  });
  return childs;
}

/** 思路：
 * 1.确定顶层节点  （如顶层节点id固定，或者顶层节点的父id固定等依据 ）
 * 2.确定依赖关系  （ 如，a的parentId和b的id之间 的关系
 * 3.根据依赖关系拼接为有层级关系的树形菜单 （递归: 1.明确函数功能 2.寻找递归结束条件 3.找到函数等阶关系式）
 *
 * 顶层节点依据: 传入的id为顶层节点，数据的parentId为id的时候，说明它是顶层节点的下一层;
 * @param {*} records - 以id和parentId为依赖关系的一维数组
 * @param {*} id - 顶层的id，父级
 */

export function formTreeByParentId(records, parentId) {
  var result = [];
  records.forEach((val) => {
    if (val.parentId === id) {
      let parent = {
        label: val.name,
        id: val.id
      };
      parent.children = getChilds(val.id, records);
      result.push(parent);
    }
  });
  return result;
}
