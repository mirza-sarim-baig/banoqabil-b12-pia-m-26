import usersData from "./users.js";

// if(){}

// keyword, conditional statement, block of statement

// let marks = 71;

// if (marks >= 80) {
//   console.log("Fast");
// }
// if (marks >= 70) {
//   console.log("KU");
// }
// if (marks >= 60) {
//   console.log("Sir Syed");
// } else {
//   console.log("IQRA");
// }

let user = {
  id: 1,
  username: "SARIM",
  city: "Karachi",
  email: "sarim@gmail.com",
  pass: "1234",
  education: "BSCS",
  number: "0000000",
  img: "img",
};

console.log(user.email);

// var userpass = "xyz123";
// && userpass == user.pass
if (
  (user.username == "sarim" ||
    user.username == "Sarim" ||
    user.username == "SARIM") &&
  (user.pass == "xyz123" || user.pass == "1234")
) {
  console.log("Login");
} else {
  console.log("error");
}

let list = ["sarim", "ahsan", "habib", null, undefined, 134, false, "helo"];
console.log("list:", list[5]);

let users = [
  {
    id: 1,
    username: "SARIM",
    city: "Karachi",
    education: "BSCS",
    number: "0000000",
    img: "img",
    credentials: {
      email: "sarim@gmail.com",
      pass: "1234",
    },
  },
  {
    id: 2,
    username: "AHSAN",
    city: "Karachi",

    education: "BSCS",
    number: "0000000",
    img: "img",
    credentials: {
      email: "ahsan@gmail.com",
      pass: "1234",
    },
  },
  {
    id: 3,
    username: "HABIB",
    city: "Karachi",
    pass: "1234",
    education: "BSCS",
    number: "0000000",
    img: "img",
    credentials: {
      email: "habib@gmail.com",
      pass: "1234",
    },
  },
  {
    address: {
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
      city: "kilcoole",
      street: "new road",
      number: 7682,
      zipcode: "12926-3874",
    },
    id: 1,
    email: "john@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: {
      firstname: "john",
      lastname: "doe",
    },
    phone: "1-570-236-7033",
    __v: 0,
  },
];

console.log(users[3].name.firstname);

console.log(usersData);
