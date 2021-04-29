/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
*/ 

const left = ['(', '[', '{']
const right = [')', ']', '}']
const maps = left.reduce((res, key, idx) => {
  return Object.assign(res, {[`${key.charCodeAt()}`]: right[idx]})
}, {})

var isValid = function(s) {
  if (!s.length) return true
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const idx = left.indexOf(s[i]) 
    if (idx > -1) {
      stack.push(s[i])
    } else {
      if (!stack.length || maps[stack.pop().charCodeAt()] !== s[i]) return false
    }
  }

  return !stack.length
};