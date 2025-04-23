let marks = [20, 12, 30, 34, 21, 67, 45, 33, 45];


function calculate(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    let average = sum / arr.length;

    return {
        min: min,
        max: max,
        average: average
    };
}

let stats = calculate(marks);
console.log(`Minimum: ${stats.min}`);
console.log(`Maximum: ${stats.max}`);
console.log(`Average: ${stats.average}`);