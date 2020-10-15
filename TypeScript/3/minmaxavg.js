var numbers = [234, 567, 12, 90, 56, 78];
function calculate(numbers) {
    var min = 999, max = 0, avg = 0, sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num < min)
            min = num;
        if (num > max)
            max = num;
        sum += num;
    }
    console.log("Min number is :" + min);
    console.log("Max number is :" + max);
    console.log("Average is :" + sum / numbers.length);
}
console.log(calculate(numbers));
