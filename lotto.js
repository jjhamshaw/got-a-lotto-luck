function LottoNumberGenerator(){
	this.sixLottoNumbers = getRandomLottoNumbers(6);

	function getRandomLottoNumbers(num){
		var numbers = [];
		
		for(var i = 0; i<num; i++){
			var n = getRandomLottoNumber();

			while (numbers.indexOf(n) > -1) {
				n = getRandomLottoNumber();
			}
			numbers.push(n);
		}
		
		return numbers;
	};

	function getRandomLottoNumber(){
		return Math.floor(Math.random() *49 +1);
	};
};