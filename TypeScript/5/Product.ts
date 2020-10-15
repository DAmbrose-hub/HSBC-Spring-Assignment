class Product{
	

	pname:string;
	pid:number;

	constructor(pname:string,pid:number){
		this.pname=pname;
		this.pid=pid;
	}

	display():void{
		console.log("Product Name : "+this.pname+ " Product ID: "+this.pid);
	}

}


	var productlist:Product[] = [ new Product('first',1),new Product('second',2),new Product('third',3),new Product('four',4)];

	productlist.forEach((product)=>{console.log(product.display())});



/*

OUTPUT

(base) ambrose@ambrose-Inspiron-15-3567:~/Desktop/ImpWeekofOct/Training/TypeScript/5$ tsc Product.ts
(base) ambrose@ambrose-Inspiron-15-3567:~/Desktop/ImpWeekofOct/Training/TypeScript/5$ node Product.js
Product Name : first Product ID: 1
undefined
Product Name : second Product ID: 2
undefined
Product Name : third Product ID: 3
undefined
Product Name : four Product ID: 4
undefined


*/