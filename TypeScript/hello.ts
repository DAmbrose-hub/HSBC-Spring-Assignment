var msg:string = "Hey there mate";
console.log(msg);

let sname:string = "Ambrose";
console.log("Hello "+sname);
function f1(){
    console.log("Its function 1");
}
//setTimeout(f1,2000);
//setTimeout(function(){console.log("Fat Row")},2000);
setTimeout(()=>{console.log("Fat Row")},2000);

var data:number[] = [1,2,3,4,5];
data.forEach(function(line){console.log(line*100)});