## 题目描述
> 实现 strStr()。  
返回蕴含在 haystack 中的 needle 的第一个字符的索引，如果 needle 不是 haystack 的一部分则返回 -1 。 

## 示例

```
输入: haystack = "hello", needle = "ll"
输出: 2

输入: haystack = "aaaaa", needle = "bba"
输出: -1
```
## 代码

```
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle.length) return 0;
    if (haystack.length < needle.length) return -1;
    for(let i = 0; i <= haystack.length - needle.length; i ++) {
        if (haystack[i] == needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (needle[j] !== haystack[i+j]) break;
                if (j == needle.length-1) return i;
            }
        }
    }
    return -1;
};
```

## 思考
