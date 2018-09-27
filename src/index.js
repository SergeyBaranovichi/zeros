module.exports = function getZerosCount(number) {
  // your implementation
var a=0;
for (var i=1; i<=number; i++){
	var b=i;
	if (b%5==0){
		
		while (i>0){
			if (b%5==0){
				a++;
				b=b/5;
			} else break;
		}
		}
	}
	return a;
}
