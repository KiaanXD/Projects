function birthdayCakeCandles(arr) {
  let answer = [];
  let maxHeight = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
      if (maxHeight == arr[i]) {
        answer.push(arr[i]);
      }
    }
    return answer.length;
}


console.log(birthdayCakeCandles([3, 4, 4, 4,]));
