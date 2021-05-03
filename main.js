
function integerArrayToStringArray(){
    var array = [20,300,5];
var stringArray = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];

console.log(...array);
for(var i = 0; i < array.length; i++){
num = array[i];
var str = "";

while(num > 0){
var mod = (num % 10);
str = stringArray[mod]+str;
num = Math.floor((num /10));
}

array[i] = str+",";
}
console.log(...array);

}
integerArrayToStringArray();


