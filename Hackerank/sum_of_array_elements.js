function mainArr (arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}

console.log(mainArr([1, 2 ,3 ,4 ,5 ,6]))
