module.exports = function longestConsecutiveLength(array) {
	// your solution here
	if(array.length==0) return 0
	if(array.length==1) return 1
a=0
b=1
array.sort(function(x,y){ return x-y;});
for(let i = 1; i< array.length; i++){
	if(array[i]-array[i-1]==1){ 
		b++
	}
	if(array[i]-array[i-1] > 1){
		if(b>a) a=b
		b=1
	}
} 
return a
}
