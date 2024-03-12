const arr = [0,3,6,7,2,-8,9,0,-3,8,16,7,4,5,3]

function selectionSort(array){
	for (let i = 0; i < array.length; i++){
		let indexMin = i;
		for (let j = i+1 ; j < array.length; j++){
			if (array[j] < array[indexMin]){
				indexMin = j;
			}
		}
		let tmp = array[i];
		array[i] = array[indexMin];
		array[indexMin] = tmp;
	}
	return array;
}

console.log(selectionSort(arr));


// (0(N^2))