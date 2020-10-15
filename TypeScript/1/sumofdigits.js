var numbers = [234, 567, 12, 90, 56, 78];
numbers.forEach(function (num) {
    var sum = 0;
    console.log("Number : " + num);
    while (num > 0) {
        sum += (num % 10);
        num = num / 10;
    }
    console.log("Sum is " + sum);
});
/*
(base) ambrose@ambrose-Inspiron-15-3567:~/Desktop/ImpWeekofOct/Training/TypeScript/1$ tsc sumofdigits.ts
(base) ambrose@ambrose-Inspiron-15-3567:~/Desktop/ImpWeekofOct/Training/TypeScript/1$ node sumofdigits.js
Number : 234
Sum is 9.999999999999998
Number : 567
Sum is 20.000000000000004
Number : 12
Sum is 3.3333333333333335
Number : 90
Sum is 10.000000000000004
Number : 56
Sum is 12.222222222222221
Number : 78
Sum is 16.666666666666664



*/ 
