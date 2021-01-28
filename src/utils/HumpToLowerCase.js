// str ====> fullName ====> full_name
export function changeHumpToLowerCase(str) {
  let arrs = str.split("");
  let lowerCase = arrs.map(val => {
    if (val.toUpperCase() === val) {
      return "_" + val.toLowerCase(); // 在大写字母前面加上下划线，并将该大写字母转为小写字母
    } else {
      return val;
    }
  });
  str = lowerCase.join("");
  return str;
}
