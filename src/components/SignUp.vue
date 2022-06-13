<template>
  <div class="signup container col-sm-4">
    <h2 class="text-center m-2">註冊會員</h2>
    <form id="form" class="form">
      <div class="form-control">
        <label for="userName">暱稱</label>
        <input type="text" placeholder="John Cena" id="userName" v-model="userName" name="userName"/>
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" placeholder="JohnCena@gmail.com" id="email" v-model="email" name="email"/>
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div class="form-control">
        <label for="password">密碼</label>
        <input type="password" placeholder="Password" id="password" v-model="password" name="password"/>
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div class="form-control">
        <label for="userName">再次輸入密碼</label>
        <input type="password" placeholder="Password check" id="password2" />
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <button
      @click="register"
      >Sign up</button>
    </form>
  </div>
</template>

<script>
import LoginPage from "@/views/loginPage.vue";
import authenticationService from '../services/authenticationService'
export default {
  data() {
    return {
      userName: "",
      email: "",
      password:"",

    };
  },
  methods: {
    async register(){
      const response = await authenticationService.register({
        userName: this.userName,
        email: this.email,
        password: this.password
      });
      console.log(response.data)
    }
  },
  computed: {},
  mounted() {
    const form = document.getElementById("form");
    const userName = document.getElementById("userName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      checkInputs();
    });
    function checkInputs() {
      // trim to remove the whitespaces
      const userNameValue = userName.value.trim();
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
      const password2Value = password2.value.trim();
      if (userNameValue === "") {
        setErrorFor(userName, "請輸入暱稱");
      } else {
        setSuccessFor(userName);
      }
      if (emailValue === "") {
        setErrorFor(email, "請輸入Email");
      } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email 格式錯誤");
      } else {
        setSuccessFor(email);
      }
      if (passwordValue === "") {
        setErrorFor(password, "請輸入密碼");
      } else {
        setSuccessFor(password);
      }
      if (password2Value === "") {
        setErrorFor(password2, "請再次輸入密碼");
      } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "輸入密碼不相同");
      } else {
        setSuccessFor(password2);
      }
    }
    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");
      formControl.className = "form-control error";
      small.innerText = message;
    }
    function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
    }
    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    }
  },
  components: { LoginPage },
};
</script>

<style>
/* /////////////////////////////////LOGIN PAGE///////////////////////////////// */
section .signup {
  color: #fff;
  font-size: 2rem;
  position: absolute;
  bottom: 200px;
  /* text-align: center; */
  /* margin-left: auto;
    margin-right: auto; */
  left: 0;
  right: 0;
}
/* section .account a:hover{
    color:#AC8776;
} */

.backdrop {
  z-index: 10000;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-color: lightblue;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.submitted .invalid {
  border: 1px solid red;
}
/* * {
  box-sizing: border-box;
}
.signup {
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 400px;
  max-width: 100%;
} */

.form {
  padding: 30px 40px;
}

.form-control {
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
}

.form-control label {
  display: inline-block;
  margin-bottom: 5px;
}

.form-control input {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  font-family: inherit;
  font-size: 14px;
  padding: 10px;
  width: 100%;
}

.form-control input:focus {
  outline: 0;
  border-color: #777;
}

.form-control.success input {
  border-color: #2ecc71;
}

.form-control.error input {
  border-color: #e74c3c;
}

.form-control i {
  visibility: hidden;
  position: absolute;
  top: 40px;
  right: 10px;
}

.form-control.success i.fa-check-circle {
  color: #2ecc71;
  visibility: visible;
}

.form-control.error i.fa-exclamation-circle {
  color: #e74c3c;
  visibility: visible;
}

.form-control small {
  color: #e74c3c;
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
}

.form-control.error small {
  visibility: visible;
}

.form button {
  background-color: #161616;
  border: 2px solid #161616;
  border-radius: 4px;
  color: #fff;
  display: block;
  font-family: inherit;
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
}
.small {
  margin: 10px;
  padding: 5px;
}
</style>
