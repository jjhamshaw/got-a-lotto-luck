function get_lotto_numbers(num){
	var numbers = [];
	
	for(var i = 0; i<num; i++){

		var n = generateLottoNumber();

		while (numbers.indexOf(n) > -1) {
			n = generateLottoNumber();
		}
		numbers.push(n);
	}
	
	return numbers;
};

function create_lotto_listItems(){
	var numbers = get_lotto_numbers(6);
	var list = "";
	
	for (var i = 0; i < numbers.length; i++) {
		list += "<li>"  + numbers[i] + "</li>";
	}

	var unorderedList = document.getElementById('lottoNumberList');
	unorderedList.innerHTML = list;
};

var generateLottoNumber = function(){
	return Math.floor(Math.random() *49 +1);
};