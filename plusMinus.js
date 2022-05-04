
/* 
Given an array of integers, 
calculate the ratios of its elements 
that are positive, negative, and zero. 
Print the decimal
value of each fraction
on a new line with places after the decimal.

Print the following 3 lines, each to 6 decimals:

    proportion of positive values
    proportion of negative values
    proportion of zeros

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]

Sample Output

0.500000
0.333333
0.166667

*/

const plusMinus = (arr) => {
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeroNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbers++;
    } else if (arr[i] < 0) {
      negativeNumbers++;
    }
    else {
      zeroNumbers++;
    }
  }
  return console.log((positiveNumbers / arr.length).toFixed(6)
    + '\n' + (negativeNumbers / arr.length).toFixed(6)
    + '\n' + (zeroNumbers / arr.length).toFixed(6));
  ;
}

const arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);