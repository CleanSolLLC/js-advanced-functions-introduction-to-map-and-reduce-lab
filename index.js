function mapToNegativize(sourceArray) {
 let newArray = [];	
 for (const num of sourceArray) {
 	newArray.push(num * -1);
 }
 return newArray;	
}

function mapToNoChange(sourceArray) {
  let newArray = [];	
  for (let i = 0; i < sourceArray.length; i++) {
	newArray.push(sourceArray[i]);
  }  
  return newArray;
}


function mapToDouble(sourceArray) {
 let newArray = [];	
 for (const num of sourceArray) {
 	newArray.push(num * 2);
 }
 return newArray;	
}



function mapToSquare(sourceArray) {
 let newArray = [];	
 for (const num of sourceArray) {
 	newArray.push(num ** 2);
 }
 return newArray;	
}



function reduceToTotal(sourceArray, startingPoint) {
	let total = startingPoint === undefined ? 0 : startingPoint;
	for (const num of sourceArray) {
		total += num;
	}
	return total;
}


const falsyValues = [false, null, undefined, 0, -0, NaN, ""]


function reduceToAllTrue(sourceArray) {
	let array1 = []
	//let array2 = sourceArray
	for (const value of sourceArray) {
		debugger;
	  if (falsyValues.includes(value)) {
	    array1.push(value)
	  }
	}
	  if (array1.length > 0) {
	  	return false;
	  }else 
	  return true;
}


function reduceToAnyTrue(sourceArray) {
	let array1 = [];
	for (const value of sourceArray) {
	  if (!falsyValues.includes(value)) {
	    array1.push(value)
	  }

	}
	  if (array1.length > 0) {
	  	return true;
	  }else 
	  return false;
}

