if (localStorage.getItem("userId")) {
    // window.location.href = "./html/main.html";
  }
  
  function loginUser() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    axios
      .post(`http://localhost:4005/user/login`, {
        username: username.value,
        password: password.value,
      })
      .then((res) => {
        const user = res.data.user;
        console.log(user);
  
        sessionStorage.setItem("token", res.data.token);
  
        if (user) {
          window.location.href = `./html/main.html`;
          localStorage.setItem("userId", user.id);
          localStorage.setItem("firstname", user.firstname);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        document.querySelector(".err").textContent = err.response.data.message;
        document.querySelector(".err").style.display = "block";
      });
  }
  
  document.getElementById("login-btn").addEventListener("click", (e) => {
    e.preventDefault();
    loginUser();
  });
  