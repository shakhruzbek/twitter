function signUp() {
    const firstname = document.getElementById("firstname");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
  
    axios
      .post("http://localhost:4005/user/signUp", {

        firstname: firstname.value,
        username: username.value,
        
        password: password.value,

      })
      .then((res) => {
        console.log(res);
        if (res.status == 200 && res.statusText == "OK") {
          window.location.href = "../index.html";
        }
      })
      .catch((err) => {
        console.log(err.message);
        
      });
  }
  
  document.getElementById("sign-btn").addEventListener("click", (e) => {
    e.preventDefault();
    signUp();
  });
  