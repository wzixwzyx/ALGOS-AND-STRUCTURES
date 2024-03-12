const array = [1,5,6,77,8,9,12,1,3,4,7]

function quickSort(array){
	if (array.length <= 1){
		return array;
	}
	let pivotIndex = Math.floor(array.length/2);
	let pivot = array[pivotIndex];
	let less = [];
	let greater = [];
	for (let i = 0; i < array.length; i++) {
		if (i === pivotIndex)
			continue
		if (array[i] < pivot){
			less.push(array[i]);
		}else{
			greater.push(array[i]);
		}
		
	}
	return [...quickSort(less),pivot, ...quickSort(greater)]

}
console.log(quickSort(array));