module.exports = function getZerosCount(number) {
  // your implementation
var a=0;
for (var i=5; i<=number; i=i+5){
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
