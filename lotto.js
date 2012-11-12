function get_lotto_numbers(num){
	var numbers = [];
	
	for(var i = 0; i<num; i++){
		numbers.push(generateLottoNumber());
	}
	
	return numbers;
};

var generateLottoNumber = function(){
	return Math.floor(Math.random() *49 +1);
};