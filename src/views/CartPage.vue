<template>
  <div class="container mb-5">
    <h1 class="mb-5">購物車</h1>
    <div class="row align-items-start">
      <div class="col-12 col-sm-8 items">
        <!--1-->
        <div class="cartItem row align-items-start">
          <div class="col-3 mb-2">
            <img
              class="w-100"
              src="https://blogger.googleusercontent.com/img/a/AVvXsEjlHGIyRTZOqXPI9Z_AKPeuODaY2nmFPqnWIMeVmSZFf1BL3VVP9mK_S1MvWBSho66qsjwnwg7UZ0G_bpmwxIdVtlHurgoBLAofYG6ZrMaZH4Kr7xYyNP0yS8XM2GJgJ6cC9xmJQvw1rqyIzD-1Srv7Cvdo5F5WfZmPcI8YDnMyVwlqBNLawtHkieXWLg"
              alt="art image"
            />
          </div>
          <div class="col-5 mb-2">
            <h4 class="text-start">吹風機</h4>
            <h5 class="text-dark" id="cartItem1Price">NT. 17900</h5>
          </div>
          <div class="col-2">
            <div class="d-flex">
              <button class="btn btn-primary">+</button>
              <div class="cartItemQuantity mx-1 px-4 py-2 text-center">1</div>
              <button class="btn btn-primary">-</button>
            </div>
            <div class="my-3">小計: NT.17900</div>
            <div class="my-2 btn btn-danger">Delete</div>
          </div>
        </div>
        <hr />
        <!--2-->
        <div class="cartItem row align-items-start">
          <div class="col-3 mb-2">
            <img
              class="w-100"
              src="https://blogger.googleusercontent.com/img/a/AVvXsEhYrF8N_i9MzVUJsaOVaK5DFcYEOpFtj0BD5_yIAvGhkk8yd3YDfKraNaQmtc5_aMozM1UIJRbzmaU8cEyGRhusVCgh7imvXYBXaCVBlr9b5t85o1Biy0Gx9WJiLzF7UgdeBeJtVezitNK9y4R0YzoK8zhEc_alKfy4KtO52cv7nkjdEyv6C8mQnZv8pg"
              alt="art image"
            />
          </div>
          <div class="col-5 mb-2">
            <h4 class="text-start">吸塵器</h4>
            <h5 class="text-dark" id="cartItem1Price">NT. 28900</h5>
          </div>
          <div class="col-2">
            <div class="d-flex">
              <button class="btn btn-primary">+</button>
              <div class="cartItemQuantity mx-1 px-4 py-2 text-center">1</div>
              <button class="btn btn-primary">-</button>
            </div>
            <div class="my-3">小計: NT.28900</div>
            <div class="my-2 btn btn-danger">Delete</div>
          </div>
        </div>
        <hr />
      </div>
      <div class="col-12 col-sm-4 p-3 proceed form">
        <!-- <div class="row m-0">
          <div class="col-sm-8 p-0">
            <h6>Subtotal</h6>
          </div>
          <div class="col-sm-4 p-0">
            <p id="subtotal">$132.00</p>
          </div>
        </div> -->
        <!-- <div class="row m-0">
          <div class="col-sm-8 p-0">
            <h6>Tax</h6>
          </div>
          <div class="col-sm-4 p-0">
            <p id="tax">$6.40</p>
          </div>
        </div>
        <hr /> -->
        <div class="row mx-0 mb-2">
          <div class="col-sm-8 p-0 d-inline">
            <h5 class="text-dark">Total</h5>
          </div>
          <div class="col-sm-4 p-0">
            <p id="total">NT. 46800</p>
          </div>
        </div>
        <a
          ><button id="btn-checkout" class="shopnow">
            <span>Checkout</span>
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* #cart {
  max-width: 1440px;
  padding-top: 60px;
  margin: auto;
} */
.form div {
  margin-bottom: 0.4em;
}
.cartItem {
  --bs-gutter-x: 1.5rem;
}
.cartItemQuantity,
.proceed {
  background: #f4f4f4;
}
.items {
  padding-right: 30px;
}
#btn-checkout {
  min-width: 100%;
}
/* body {
  background-color: #fff;
  font-family: "Exo", sans-serif;
  font-size: 22px;
  margin: 0;
  padding: 0;
  color: #111111;
  justify-content: center;
  align-items: center;
}
a {
  color: #0e1111;
  text-decoration: none;
} */
.btn-check:focus + .btn-primary,
.btn-primary:focus {
  color: #fff;
  background-color: #111;
  border-color: transparent;
  box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
}
button:hover,
.btn:hover {
  box-shadow: 5px 5px 7px #c8c8c8, -5px -5px 7px white;
}
button:active {
  box-shadow: 2px 2px 2px #c8c8c8, -2px -2px 2px white;
}

/*PREVENT BROWSER SELECTION*/
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: none;
}
/*main*/
main:before {
  content: "";
  display: block;
  height: 88px;
}
h1 {
  font-size: 2.4em;
  font-weight: 600;
  letter-spacing: 0.15rem;
  text-align: center;
  margin: 30px 6px;
}
h2 {
  color: rgb(37, 44, 54);
  font-weight: 700;
  font-size: 2.5em;
}
h3 {
  border-bottom: solid 2px #000;
}
h5 {
  padding: 0;
  font-weight: bold;
  color: #92afcc;
}
p {
  color: #333;
  font-family: "Roboto", sans-serif;
  margin: 0.6em 0;
}
h1,
h2,
h4 {
  text-align: center;
  padding-top: 16px;
}
/* yukito bloody */
.back {
  position: relative;
  top: -30px;
  font-size: 16px;
  margin: 10px 10px 3px 15px;
}
.inline {
  display: inline-block;
}

.shopnow,
.contact {
  background-color: #000;
  padding: 10px 20px;
  font-size: 30px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.5s;
  cursor: pointer;
}
.shopnow:hover {
  text-decoration: none;
  color: white;
  background-color: #c41505;
}
/* for button animation*/
.shopnow span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: all 0.5s;
}
.shopnow span:after {
  content: url("https://badux.co/smc/codepen/caticon.png");
  position: absolute;
  text-align: center;
  font-size: 30px;
  opacity: 0;
  top: 2px;
  right: -6px;
  transition: all 0.5s;
}
.shopnow:hover span {
  padding-right: 25px;
}
.shopnow:hover span:after {
  opacity: 1;
  top: 2px;
  right: -6px;
}
.ma {
  margin: auto;
}
.price {
  color: slategrey;
  font-size: 2em;
}
#mycart {
  min-width: 90px;
}
#cartItems {
  font-size: 17px;
}
#product .container .row .pr4 {
  padding-right: 15px;
}
#product .container .row .pl4 {
  padding-left: 15px;
}
</style>
