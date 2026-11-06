// The sum of a range

function range(start, end, step) {
    const rangeArray = [];
    const absoluteNum = Math.abs(step);

    if (start > end) {
        for (let i = start; i >= end; i -= absoluteNum) {
            rangeArray.push(i);
        }
    } else {
        for (let i = start; i <= end; i += absoluteNum) {
            rangeArray.push(i);
        }
    }

    return rangeArray;
};

function sum(array) {
    let arraySum = 0;

    for (let num of array) {
        arraySum += num;
    };

    return arraySum;
};

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));