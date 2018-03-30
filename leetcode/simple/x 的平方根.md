## 题目描述
> 实现 int sqrt(int x) 函数。

计算并返回 x 的平方根。

x 保证是一个非负整数。

## 示例

```
输入: 4
输出: 2

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 由于我们想返回一个整数，小数部分将被舍去。
```
## 代码

```
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 0) return 0; 
    return getValue(1, x, x);
};

function getValue(low ,high, val) {
    if(high - low == 1) return low;
    let middle = Math.ceil((high + low) / 2);
    let temp = middle * middle;
    if (temp == val) return middle;
    if (temp < val) {
        return getValue(middle, high, val);
    } else {
        return getValue(low, middle, val)
    }
}
```

## 思考
