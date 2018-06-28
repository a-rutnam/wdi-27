
const nums = [2,5,6,7,8,10,20,45,70,99];

const binarySearch = (arr, needle) => {
  let start = 0;
  let end   = arr.length - 1;
  let middle;
  let iterations = 0;

  // continue as long as start and end have not 'crossed' each other,
  // i.e. there is still an array left to look into
  while( start <= end ){

    iterations++;

    const range = end - start;
    middle = Math.round(start + range/2);  // round up to nearest whole number
    console.log(`Middle: ${middle}`);

    if( arr[middle] > needle){
      end = middle - 1;
    } else if( arr[middle] < needle ){
      start = middle + 1;
    } else {
      // it's the value we're looking for
      console.log(`iterations: ${ iterations }`);
      return middle;
    }

  }

  return -1; // no match, needle is not in array
};

console.log( binarySearch(nums, 45) );
