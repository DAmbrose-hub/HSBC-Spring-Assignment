function calsqurt(numbers) {
    var result = [];
    numbers.forEach(function (num) { result.push(num * num); });
    return result;
}
var arr = [23, 14, 56, 78, 2, 9];
console.log("Original array : " + arr);
arr = calsqurt(arr);
console.log("Square : " + arr);
