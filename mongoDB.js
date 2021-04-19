function mongoDB(obj) {
    // object to store flattened values
    const result = {};
    // iterating for each key in obj
    for (var k of Object.keys(obj)) {
      // if value of a particular key is object then call recursively flatten() with this new Object
      if(typeof obj[k] === 'object') {
        newObj = mongoDB(obj[k]);
        // from above we get the flattened values of inner object
        for(var key of Object.keys(newObj)) {
          // concat them with current key and add it to result
          result[k+'.'+key] = newObj[key];
        }
      } else {
        // if current value is not an object simply add it to result
        result[k] = obj[k];
      }
    }
    // finally returning result
    return result;
  }

module.exports=mongoDB