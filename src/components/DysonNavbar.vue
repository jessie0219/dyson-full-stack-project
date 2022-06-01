<template>
  <section id="top" class="second section">
    <nav class="navbar navbar-expand-lg fixed-top" id="nav">
      <div class="container-fluid">
        <a class="navbar-brand logo" href="#top">dyson</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-icon"><i class="fa-solid fa-bars"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <!-- <a class="nav-link link-light" aria-current="page" href="#top"
                >首頁</a
              > -->
              <router-link class="nav-link link-light" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link link-light" href="./products.html">吸塵器</a> -->
              <router-link class="nav-link link-light" to="/products"
                >吹風機</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link link-light" href="#">空氣清淨機</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-light" href="#">吸塵器</a>
            </li>
          </ul>
          <form class="d-flex">
            <div id="window-container">
              <div id="window-pop">
                <div class="window-content">
                  <span>
                    <div
                      class="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            我愛孔劉~
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Placeholder content for this accordion, which is
                            intended to demonstrate the
                            <code>.accordion-flush</code> class. This is the
                            first item's accordion body.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            我愛曹政奭~
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Placeholder content for this accordion, which is
                            intended to demonstrate the
                            <code>.accordion-flush</code> class. This is the
                            second item's accordion body. Let's imagine this
                            being filled with some actual content.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            不是渣女啦~
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Placeholder content for this accordion, which is
                            intended to demonstrate the
                            <code>.accordion-flush</code> class. This is the
                            third item's accordion body. Nothing more exciting
                            happening here in terms of content, but just filling
                            up the space to make it look, at least at first
                            glance, a bit more representative of how this would
                            look in a real-world application.
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <a class="m-3" @click="customizeWindowEvent()"
              ><i class="fa-regular fa-circle-question"></i
            ></a>
            <router-link class="m-3" to="/login"
              ><i class="fa-solid fa-user-large"></i
            ></router-link>

            <a class="m-3" href="#"
              ><i class="fa-solid fa-cart-shopping"></i
            ></a>
          </form>
        </div>
      </div>
    </nav>
    <div>
      <div class="text-center justbuy">
        <a href="#">HEY BRO, JUST BUY IT</a><br />
        <div class="btn btn-light">DISCOVER THE LINE OUT</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {},
  mounted() {
    var nav = document.querySelector("nav");

    window.addEventListener("scroll", function () {
      if (this.window.pageYOffset > 100) {
        nav.classList.add("bg-dark", "shadow");
      } else {
        nav.classList.remove("bg-dark", "shadow");
      }
    });
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
body {
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://picsum.photos/600/300?random=8);
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
}
* a {
  text-decoration: none;
  color: #fff;
}
* a:hover {
  color: #fff;
}
section nav span.navbar-icon {
  color: #fff;
}
.logo {
  color: #fff;
  margin-left: 50px;
  font-size: 2rem;
  font-family: "Merienda", cursive;
}
section nav li.dropdown {
  display: block;
}
section li.nav-item {
  font-size: 1.2rem;
}
section.second {
  height: 100vh;
}
section.second a {
  margin: 0 20px;
}
section .justbuy {
  font-size: 2.5rem;
  position: absolute;
  bottom: 100px;
  text-align: center;
  /* margin-left: auto;
    margin-right: auto; */
  left: 0;
  right: 0;
}
section .justbuy a:hover {
  color: #ac8776;
}
/* 彈出視窗 */
#window-container {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

#window-pop {
  background: white;
  width: 60%;
  z-index: 1;
  margin: 12% auto;
  overflow: auto;
  border-radius: 20px;
}

.window-content {
  width: auto;
  height: auto;
  /* line-height: 600px; */
  overflow: auto;
  text-align: center;
}

span {
  /* display: inline-block; */
  /* vertical-align: middle; */
  line-height: normal;
}
</style>
