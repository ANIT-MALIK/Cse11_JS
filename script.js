console.log("first")

var num=10;
console.log(num);
console.log(typeof(num));
num = false;
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));
num = undefined;
console.log(num);
console.log(typeof(num));
var sayHello = function(){
    alert('hello world!');
}
const sym1 = Symbol(4)
console.log(sym1)
const sym2 = Symbol(4)
console.log(sym2)
if(sym1==sym2){
    console.log("true")
}
else{
    console.log("false")
}

//loop
for (var i=0;i<10;i++){
    document.write("Current count: "+ i);
    document.write("<br/>");
}
document.write("loop stopped<br>");

var grade ="a";
document.write("entering switch block<br/>");
switch(grade){
    case "a":document.write("good job");
    break;
    case "b":document.write("pretty good");
    break;
    case "c":document.write("do better");
    break;
    default:document.write("fail");
}

function myFunction(){
    alert("hello world!");
}