let number = [1, 2, 3, 4, 5, 6];
let prime = [];
const findPrim = (num) => {
  for (i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      prime.push(num[i]);
    }
  }
  return prime;
};
console.log(findPrim(number));
