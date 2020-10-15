var numbers:number[]= [234,567,12,90,56,78];

function calculate(numbers){
	var min:number=999,max:number=0,avg:number=0,sum:number=0;

	for (var num of numbers) {
		
		if (num<min)
			min=num;

		if (num>max)
			max=num;

		sum+=num;
	}

	console.log("Min number is :"+min);
	console.log("Max number is :"+max);
	console.log("Average is :"+sum/numbers.length);

}

console.log(calculate(numbers));


/*

OUTPUT

(base) ambrose@ambrose-Inspiron-15-3567:~/Desktop/ImpWeekofOct/Training/TypeScript/3$ tsc minmaxavg.ts
(base) ambrose@ambrose-Inspiron-15-3567:~/Desktop/ImpWeekofOct/Training/TypeScript/3$ node minmaxavg.js
Min number is :12
Max number is :567
Average is :172.83333333333334
undefined


*/