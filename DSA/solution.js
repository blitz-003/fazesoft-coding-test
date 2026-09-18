const highesht_jump = (arr) => {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > highest) {
      return false;
    }
    highest = Math.max(highest, i + arr[i]);
    if (highest >= arr.length - 1) {
      return true;
    }
  }
  return true;
};

// console.log(highesht_jump([2, 3, 1, 1, 4]));

// console.log(highesht_jump([3, 2, 1, 0, 4]));
// console.log(highesht_jump([2, 3, 0, 0, 4]));
