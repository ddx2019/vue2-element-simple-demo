export function filterAddUpdate(name) {
  const names = ["添加", "修改", "添加分组", "编辑分组", "查看详情"];
  return names.includes(name) ? true : false;
}
