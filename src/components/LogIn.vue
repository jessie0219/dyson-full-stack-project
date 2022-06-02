<template>
  <div class="login container col-sm-4">
    <h2 class="text-center">登入會員</h2>
    <form class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="accountInput">帳號</label>
        <input
          class="form-control"
          type="text"
          id="accountInput"
          name="Account"
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
          name="Passowrd"
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
          name="RememberMe"
        />
        <label class="form-check-label" for="rememberMeCheckbox"
          >記住我的帳號</label
        >
        <i
          class="text-primary bi bi-info-circle"
          id="rememberMeInfoBtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style="cursor: pointer"
        ></i>
      </div>
      <button type="submit" class="btn btn-primary m-3">Login</button>
    </form>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">小提示</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          記憶您輸入的帳號，讓您更快速地<s>衝動購物</s>登入。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary mx-auto"
            data-bs-dismiss="modal"
          >
            賀啦!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    signUp() {},
  },
  computed: {},
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
