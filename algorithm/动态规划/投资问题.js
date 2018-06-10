/**
 * 投资问题
 * @param {number [][]} assign
 * @return {number}
 */

// 递归  效率很低  大量重复计算
function invest(assign) {
    const money = assign[0].length - 1;
    const nums = assign.length;

    function getMax(n, m) {
        if (n == 0) return assign[n][m];
        let max = getMax(n - 1, m) + assign[n][0];
        for (let i = m; i >= 0; i--) {
            let temp = getMax(n - 1, i) + assign[n][m - i];
            if(temp >= max) {
                max = temp;
            }
        }
        return max;
    }
    return getMax(nums - 1, money);
}

console.log(invest([
    [0, 11, 12, 13, 14, 15],
    [0, 0, 5, 10, 15, 20],
    [0, 2, 10, 30, 32, 40],
    [0, 20, 21, 22, 23, 24]
]))

// 迭代 空间换时间