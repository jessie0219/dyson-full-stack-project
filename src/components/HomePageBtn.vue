<template>
  <section class="second section">
    <div>
      <div class="text-center justbuy">
        <a href="#">Welcome to Dyson</a><br />
        <div class="btn btn-light mx-3">開始選購</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
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
</style>
