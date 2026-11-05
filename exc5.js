// recursion

function isEven(num) {
    if (num < 0) {
        return 'Invalid number';
    } else if (num === 0) {
        return 'Even';
    } else if (num === 1) {
        return 'Odd';
    } else {
        return isEven(num - 2);
    };
};

console.log(isEven(50));
console.log(isEven(71));
console.log(isEven(-1));