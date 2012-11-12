function get_lotto_numbers(num){
	var numbers = [];
	
	for(var i = 0; i<num; i++){
		numbers.push(generateLottoNumber());
	}
	
	return numbers;
};

function create_lotto_listItems(){
	var numbers = get_lotto_numbers(6);
	var list = "";
	var unorderedList = document.getElementById('lottoNumbers');

	for (var i = 0; i < numbers.length; i++) {
		list += "<li>"  + numbers[i] + "</li>";
	}

	return list;
};

var generateLottoNumber = function(){
	return Math.floor(Math.random() *49 +1);
};