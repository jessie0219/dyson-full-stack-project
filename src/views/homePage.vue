<template>
  <section class="third section">
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
  <section class="four section">
    <div class="picture"></div>
  </section>
</template>

<script>
export default {};
</script>

<style>
section.third {
  /* height: 100vh; */
  background-color: #161616;
}
@media screen and (max-width: 1440px) {
  section.third {
    /* height: 200%; */
    background-color: #161616;
  }
}
section.third .card {
  border-color: #161616;
  border-radius: 20px;
}
section.third img {
  border-radius: 10px;
}
section.four .picture {
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.005),
      rgba(255, 255, 255, 0)
    ),
    url(https://picsum.photos/600/300?random=7);
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
}
</style>
