const arr = [5, 10, 15, 20];
console.log(
  arr.reduce((prev, curr) => {
    console.log("prev", prev, "current", curr);
    return prev + curr;
  })
);
