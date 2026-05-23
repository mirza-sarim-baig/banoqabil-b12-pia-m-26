console.log("Welcome to the signup page!");

const saveUserData = () => {
  //   console.log("Saving user data...");
  //   let title = document.getElementById("title");
  //   console.log(title.innerHtml);
  //   title.innerText = "Hello World";

  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  //   console.log("username:", username.value);
  //   console.log("email:", email.value);
  //   console.log("password:", password.value);

  let reterivedData = JSON.parse(localStorage.getItem("users"));

  let usersArray = reterivedData || [];

  let userObj = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  usersArray.push(userObj);

  localStorage.setItem("users", JSON.stringify(usersArray));
  console.log("Reterived data,", JSON.parse(localStorage.getItem("users")));

  //   console.log("User Array:", usersArray);
};
