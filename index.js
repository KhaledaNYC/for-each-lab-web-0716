function iterativeLog(array) {
  array.forEach(function(element,index){
   console.log(`${index}: ${element}`)
   });

}

function iterate(callback) {
  array = [1,2,3];
  array.forEach(callback);
  return array;
}

function doToArray(array,callback) {
  array.forEach(callback);
}






//   2) index iterate(callback) calls the callback on an internal array, then returns the array:
//      ReferenceError: iterate is not defined
//       at Context.<anonymous> (test/index-test.js:22:22)
//
//   3) index doToArray(array, callback) uses `callback` as the callback for `array`.forEach:
//      ReferenceError: doToArray is not defined
//       at Context.<anonymous> (test/index-test.js:41:7)
