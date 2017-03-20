// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(Array.isArray(obj)) {
		var arrStr = [];
		for(var i = 0; i < obj.length; i++) {
			arrStr.push(stringifyJSON(obj[i]));	
		}
		return '[' + arrStr.join(',') + ']';
  } else if(obj !== null && obj !== undefined) { 
  	if(typeof obj === 'object') {
  		var objArr = [];
  		var objStr;
  		for(var i in obj) {
  			objStr = '';
  			if(obj[i] !== undefined && typeof obj[i] !== 'function') {
					objStr += stringifyJSON(i);
	  			objStr += ':';
	  			objStr += stringifyJSON(obj[i]);
	  			objArr.push(objStr);
  			}
  		}
  		return '{' + objArr.join(',') + '}';
  	} else if(typeof obj === 'string') {
  		return '"' + obj + '"';		
 	  } else if(obj === undefined) {
 		 	return '';
 	  } else {
  		console.log(obj);
  		return obj.toString();
  	}
  } else {
  	if(obj === null) {
  		return 'null';
  	}	
  }
};
