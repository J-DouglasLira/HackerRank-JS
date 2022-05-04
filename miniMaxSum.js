const miniMaxSum = (arr) => {
  let minSum = 0;
  let maxSum = 0;
  arr.sort(function (a, b) { //this method returns an array of strings;
    return a - b;
  })
  for (let i = 0; i < arr.length - 1; i++) {
    minSum += arr[i];
  }
  for (let j = 1; j < arr.length; j++) {
    maxSum += arr[j];
  }
  return console.log(minSum, maxSum);
}

/* second solution */

const minMaxSum = (arr) => {
  let sum = arr.reduce((a, b) => a + b)
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  return console.log(sum - maxVal + ' ' + (sum - minVal));
}

const arr = [7, 69, 2, 221, 8974];

miniMaxSum(arr);