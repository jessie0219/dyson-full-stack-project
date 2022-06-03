<template>
  <section id="top" class="second section">
    <nav class="navbar navbar-expand-lg fixed-top" id="nav">
      <div class="container-fluid">
        <a class="navbar-brand logo" href="#">dyson</a>
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
              <router-link
                class="nav-link link-light"
                @click="tabChange(Home)"
                to="/"
                >首頁</router-link
              >
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link link-light" href="./products.html">吸塵器</a> -->
              <router-link
                class="nav-link link-light"
                to="/hair"
                @click="tabChange(Hair)"
                >頭髮護理</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link link-light"
                to="/airpurifier"
                @click="tabChange(AirPurifier)"
                >空氣清淨機</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link link-light"
                to="/VacuumCleaner"
                @click="tabChange(VacuumCleaner)"
                >吸塵器</router-link
              >
            </li>
          </ul>
          <form class="d-flex">
            <a class="m-3" @click="openQuestion"
              ><i class="fa-regular fa-circle-question"></i
            ></a>
            <router-link class="m-3" to="/login" @click="tabChange(Home)"
              ><i class="fa-solid fa-user-large"></i
            ></router-link>
            <router-link class="m-3" to="/cart" @click="tabChange(Home)"
              ><i class="fa-solid fa-cart-shopping"></i
            ></router-link>
          </form>
        </div>
      </div>
    </nav>
    <div v-is="changePageBtn"></div>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import Hair from "@/components/HairBtn.vue";
import AirPurifier from "@/components/AirPurifierBtn.vue";
import VacuumCleaner from "@/components/VacuumCleanerBtn.vue";
import Home from "@/components/HomePageBtn.vue";

export default {
  components: { Home, Hair, AirPurifier, VacuumCleaner },
  data() {
    return {
      Home: Home,
      Hair: Hair,
      AirPurifier: AirPurifier,
      VacuumCleaner: VacuumCleaner,
      changePageBtn: Home,
    };
  },
  methods: {
    openQuestion() {
      Swal.fire({
        title: "聯絡我們",
        background: "#fff",
        backdrop: `rgba(255,255,255,0.5) url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVwK_EkOyoyHpAgrNXW-NF4RPpxUQNPkmvu6Mp94RkaEdBXpQccsbkL18RQvBI6Jj6qFkglfCHlT2wGyfN1am8EsXN7Oe5Xpej0N1i53q7LjKwVfyJqJ9AzGtoTz2hr5fmYB535ft7sPK1shi7ImFkeujMrrGFK3TTH9AQsX46bg6mePxFctnzB9Jf-A/s320/dyson-rainbow2.gif) no-repeat center top`,
        html:
          "台灣總代理 恆隆行貿易股份有限公司<br/>地址: 台北市內湖區洲子街88號7樓<br/>電話: 0800-251-209<br/>前往: " +
          "<a class='text-primary' href='www.hengstyle.com'>www.hengstyle.com</a>",
        // icon: "question",
      });
    },
    tabChange(tabItem) {
      this.changePageBtn = tabItem;
    },
  },
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
