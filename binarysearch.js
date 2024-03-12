const array = [0,1,2,3,4,5,6,7,8,9,10]

function binarySearch(array, item){
	let start = 0;
	let end = array.length
	let middle;
	let found = false;
	let position = -1;
	while(found === false && start <= end){
		middle = Math.floor((start + end) / 2);
		if (array[middle] === item){
			found = true;
			position = middle;
			return position;
		}
		if (item < array[middle]){
			end = middle-1;
		}else{
			start = middle +1;
		}
	}
	return position;

}

console.log(binarySearch(array,10));

// (O(log2N))


function recursiveBinarySearch(array,item,start,end){
	let middle = Math.floor((start + end) / 2);
	if (item === array[middle]){
		return middle;
	}
	if (item < array[middle]){
		return recursiveBinarySearch(array,item,start,middle-1)
	}else{
		return recursiveBinarySearch(array,item,middle+1,end)
	}
}

console.log(recursiveBinarySearch(array,8,0,array.length))