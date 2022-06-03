<template>
  <div class="login container col-sm-4">
    <h2 class="text-center">註冊會員</h2>
    <form class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="accountInput">Email</label>
        <input
          class="form-control"
          type="email"
          id="emailInput"
          name="email"
          placeholder="輸入email"
          required
        />
        <div class="invalid-feedback">請輸入email。</div>
      </div>
      <div class="mb-3">
        <label for="accountInput">帳號</label>
        <input
          class="form-control"
          type="text"
          id="accountInput"
          name="account"
          placeholder="輸入帳號"
          required
        />
        <div class="invalid-feedback">請輸入帳號。</div>
      </div>
      <div class="mb-3">
        <label for="passwordInput">密碼</label>
        <input
          class="form-control"
          type="password"
          id="passwordInput"
          name="password"
          placeholder="輸入密碼"
          required
        />
        <div class="invalid-feedback">請輸入密碼。</div>
      </div>
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="rememberMeCheckbox"
          name="rememberMe"
        />
        <!-- 步驟2 參考文件製作 icon-button(用於觸發顯示彈窗)-->
        <i
          class="text-primary bi bi-info-circle"
          id="rememberMeInfoBtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style="cursor: pointer"
        ></i>
      </div>
      <button type="submit" class="btn btn-primary mb-3">Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    // form() {
    //   if (this.form === "login") {
    //     return this.products;
    //   } else if (this.form === "signup") {
    //     return this.products.filter((item) => this.buying[item.id]);
    //   }
    // },
  },
};
</script>

<style>
/* /////////////////////////////////LOGIN PAGE///////////////////////////////// */
section .login {
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
</style>
