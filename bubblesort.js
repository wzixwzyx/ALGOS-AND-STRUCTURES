const array = [0,4,6,32,-8,3,6,2,1,3,7,8]

function bubbleSort(array){
	for (let i = 0; i < array.length; i++){
		for (let j = 0; j < array.length; j++){
			if (array[j+1] < array[j]){
				let tmp = array[j];
				array[j] = array[j+1];
				array[j+1] = tmp;
			} 
		}
	}
	return array;
}
console.log(bubbleSort(array));

// O(N^2)

