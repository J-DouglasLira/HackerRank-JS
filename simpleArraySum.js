

const simpleArraySum = () => {
  const ar = [1, 2, 3, 4, 10, 11];
  const sumWithReduce = ar.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  })
  return console.log(sumWithReduce);
}


simpleArraySum();
