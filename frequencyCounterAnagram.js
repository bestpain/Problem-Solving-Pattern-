function frequencyCounterAnagram(str1,str2){
	if(str1.length!==str2.length)
		return false;

	const lookup={}
//for every char in string 1 create a key value pair and store in lookup	
	for(let i=0;i<str1.length;i++)
	{
		let first=str1[i];
		lookup[first]?lookup[first]+=1:lookup[first]=1;		
	}

//comapare each key of lookup object to string 2
	for(let i=0;i<str2.length;i++)
	{
		let first=str2[i];
//if key does not match with character of second string return false 
		if(!lookup[first])
		{
			return false;
		}else{
			lookup[first]-=1;
		}
	}
	return true;
}

console.log(frequencyCounterAnagram("test","test"))