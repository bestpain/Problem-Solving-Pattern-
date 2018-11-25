//this is useful when you have multiple pieces of data multiple inputs you need to compare them to see if they consist of similar values.
//If they are anagrams of one another if a value is contained inside of another value anytime you're comparing pieces of data to inputs or more than two and frequencies of certain things occur.
//it does not involve nested loops and running time is O(n)

function frequencyCounter(arr1,arr2){	
//compare the length of both array 
	if(arr1.length!==arr2.length)
		return false;
//create an object which stores {key:value} where key is a 'digit' and value is the frequency of the digit.
	let frequencyCounter1={}
	let frequencyCounter2={}
//for every element in array create a key and update its frequency.
	for(let val of arr1){
		frequencyCounter1[val]=(frequencyCounter1[val])?frequencyCounter1[val]+1:1;
	}
//for...of is used to iterate over values of an array
	for(let val of arr2){
		frequencyCounter2[val]=(frequencyCounter2[val])?frequencyCounter2[val]+1:1;
	}
//for...in can be used to iterate over keys of an object.
	for(let key in frequencyCounter1){
//elimate the non required cases ....reduces running time
		if(!key in frequencyCounter2)
			return false;
		if(frequencyCounter2[key]!==frequencyCounter1[key])
			return false;
	}
	console.log(frequencyCounter1)
	console.log(frequencyCounter2)
	return true;
}

console.log(frequencyCounter([200,2,1,2,3,1],[1,1,2,2,3,200]))