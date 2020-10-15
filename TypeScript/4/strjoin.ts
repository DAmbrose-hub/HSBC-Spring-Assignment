function strjoin(sep,...args: string[]){
	
	var sorted = args.sort();
	var str = sorted.join(sep);  
	console.log(str);
}

console.log(strjoin('#',"Dean","Aparna","Clark","Octavia"));
console.log(strjoin(',',"Dean","Aparna","Clark","Octavia"));


/*

OUTPUT

(base) ambrose@ambrose-Inspiron-15-3567:~/Desktop/ImpWeekofOct/Training/TypeScript/4$ tsc strjoin.ts
(base) ambrose@ambrose-Inspiron-15-3567:~/Desktop/ImpWeekofOct/Training/TypeScript/4$ node strjoin.js
Aparna#Clark#Dean#Octavia
undefined
Aparna,Clark,Dean,Octavia
undefined



*/
