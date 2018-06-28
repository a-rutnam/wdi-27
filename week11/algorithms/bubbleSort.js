const nums = [256, -20, 0, 1, 100, 2, 5, 102, 200, -100];

const bubbleSort = arr => {
  arr = [...arr];  // make a copy of the original argument, which is a reference (so we don't mutate it)
  let end = arr.length - 1;

  while( end > 0 ){
    for( let i = 0; i < end; i++ ){
      if( arr[i] > arr[i + 1] ){
        let largerValue = arr[i];  // swap the array values, via a temp variable
        arr[i] = arr[ i + 1 ];
        arr[i+1] = largerValue;
      }
    }
    end--;
  }

  return arr;
};

console.log( 'output', bubbleSort(nums) );
