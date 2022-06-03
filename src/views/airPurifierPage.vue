<template>
  <section class="pics">
    <!-- <div class="container"> -->
    <div class="container text-center mt-5">
      <h2>OUR FAVORITE</h2>
      <a href="#">All products</a>
    </div>
    <div class="slider">
      <div class="slide-track">
        <!-- TODO:改成用api接圖片 [Jessie:2022/05/24 12:32] -->
        <div class="slide">
          <img src="../assets/airpurifier-涼暖空淨機.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/airpurifier-二合一空氣清淨機TP07.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/airpurifier-二合一空氣清淨機TP07-2.png" alt="" />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-二合一涼風空氣清淨機TP7A(鎳白色).png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-二合一涼風空氣清淨機TP03(白銀色).png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-二合一涼風空氣清淨機TP00.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-Formaldehyde二合一甲醛偵測空氣清淨機TP09.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-Formaldehyde二合一甲醛偵測空氣清淨機TP09-2.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img src="../assets/airpurifier-二合一空氣清淨機TP07-2.png" alt="" />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-二合一涼風空氣清淨機TP00.png"
            alt=""
          />
        </div>

        <div class="slide">
          <img src="../assets/airpurifier-涼暖空淨機.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/airpurifier-二合一空氣清淨機TP07.png" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/airpurifier-二合一空氣清淨機TP07-2.png" alt="" />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-二合一涼風空氣清淨機TP7A(鎳白色).png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-二合一涼風空氣清淨機TP03(白銀色).png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-二合一涼風空氣清淨機TP00.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-Formaldehyde二合一甲醛偵測空氣清淨機TP09.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-Formaldehyde二合一甲醛偵測空氣清淨機TP09-2.png"
            alt=""
          />
        </div>
        <div class="slide">
          <img src="../assets/airpurifier-二合一空氣清淨機TP07-2.png" alt="" />
        </div>
        <div class="slide">
          <img
            src="../assets/airpurifier-二合一涼風空氣清淨機TP00.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
  <section class="third">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="m-5">
            <div class="card-body">
              <img
                src="https://picsum.photos/608/404?random=5"
                class="card-img-top"
                alt="..."
              />
              <div class="text-center card-body">
                <h5 class="title text-light mt-5 m-3">
                  Special title treatment
                </h5>
                <a href="#" class="btn btn-light">DISCOVER WHAT</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="m-5">
            <div class="card-body">
              <img
                src="https://picsum.photos/608/404?random=6"
                class="card-img-top"
                alt="..."
              />
              <div class="text-center card-body">
                <h5 class="title text-light mt-5 m-3">
                  Special title treatment
                </h5>
                <a href="#" class="btn btn-light">DISCOVER WHAT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="four">
    <div class="picture"></div>
  </section>
</template>

<script>
export default {};
</script>

<style>
section.pics {
  background-color: #161616;
  height: 100vh;
  display: grid;
  place-items: center;
}
section.pics h2 {
  color: #fff;
  font-size: 50px;
}
section.pics a {
  text-decoration: underline;
}
section.pics .slider {
  height: 500px;
  margin: auto;
  position: relative;
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.slide-track {
  display: flex;
  width: calc(500px * 18);
  animation: scroll 60s linear infinite;
}
.slide-track:hover {
  animation-play-state: paused;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 9));
  }
}
.slide {
  height: 500px;
  width: 550px;
  display: flex;
  align-items: center;
  padding: 30px;
  perspective: 100px;
}
section.pics .slide img {
  width: 100%;
  transition: 1s;
}
section.pics .slide img:hover {
  transform: translateZ(20px);
}

/* shadow */
.slider::before,
.slider::after {
  background: linear-gradient(
    to right,
    rgba(22, 22, 22, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
  height: 100%;
  position: absolute;
  width: 15%;
  z-index: 2;
}
.slider::before {
  left: 0;
  top: 0;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
</style>
