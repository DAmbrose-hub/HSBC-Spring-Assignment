function calsqurt(numbers){
	
	var result:number[]=[];
	numbers.forEach(function(num){result.push(num*num);});	
	return result;
}

var arr = [23,14,56,78,2,9];
console.log("Original array : "+arr);
arr = calsqurt(arr);
console.log("Square : "+arr);

/*

OUTPUT

(base) ambrose@ambrose-Inspiron-15-3567:~/Desktop/ImpWeekofOct/Training/TypeScript/6$ tsc sqrt.ts
(base) ambrose@ambrose-Inspiron-15-3567:~/Desktop/ImpWeekofOct/Training/TypeScript/6$ node sqrt.js
Original array : 23,14,56,78,2,9
Square : 529,196,3136,6084,4,81


*/