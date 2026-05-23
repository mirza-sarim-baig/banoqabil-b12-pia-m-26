// const sum = () => {} new
// function sum (){} old

// const greet = () => {
//   console.log("hello");
// };

const sum = (val1, val2) => {
  let sum = val1 + val2;
  // return sum;
  console.log(sum);
};

// let numbersSum = sum(5, 10);
// console.log(numbersSum);

sum(5, 10);

const findUser = (id) => {
  // find data from db
  return {
    id: 1,
    name: "John Doe",
    address: "123 Main St",
    gender: "male",
    education: "Bachelor's Degree",
  };
};

let user = findUser(1);
console.log(user.name);
