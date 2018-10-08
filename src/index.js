module.exports = function longestConsecutiveLength(array) {
	// your solution here
	var len = array.length;
	if(len==0)
		return 0;
	if(len==1)
		return 1;
  var order=0
  var tmpOrd=1
  array.sort(function(x,y){ return x-y;});
  for(let i = 1; i< len; i++){
    if(array[i]-array[i-1]==1){ 
      tmpOrd++
    }
    if(array[i]-array[i-1] > 1){
      if(tmpOrd>order) order=tmpOrd
      tmpOrd=1
    }
  } 
  return order
}