var numbers = [ 254, 115, 78, 25, 91, 45, 37 ];

for(var i = 0; i < numbers.length; i++) {
	if(numbers[i] > 50) {
		console.log(numbers[i]);
	}
}

var lett = [];
var str = "Backend As A Service";
var first_lett = "";

str = str.split(' ');

for(var i = 0; i < str.length; i++) {
	lett.push(str[i][0]);
}
console.log(lett);

for(i = 0; i <lett.length; i++) {
	first_lett += lett[i];
}

console.log(first_lett);

function Data(number) {
	if(typeof(number) === "number")
}