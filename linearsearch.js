const array = [1,4,5,8,9,4,4,3,1,2,5,8,3];

function linearSearch(array,item){
	for (let i = 0; i < array.length; i++){
		if(array[i] === item){
			return i;
		}
	}
	return null;
}

console.log(linearSearch(array,5))


// O(N)