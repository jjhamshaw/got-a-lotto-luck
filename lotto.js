var generateLottoNumbers = function(num){
	var numbers = [];
	
	for(var i = 0; i<num; i++){
		numbers.push(generateLottoNumber());
	}
	
	return numbers;
};

var generateLottoNumber = function(){
	return Math.floor(Math.random() *49 +1);
};

console.log(generateLottoNumbers(6));
console.log(generateLottoNumbers(7));