<template>
  <footer class="section">
    <div class="container">
      <div class="text-center">
        <span class="logo"><a to="/">dyson</a></span>
      </div>
      <div class="text-center mt-3">
        <span class="footer-icon"
          ><a href="#"><i class="fa-brands fa-facebook-f"></i></a
        ></span>
        <span class="footer-icon"
          ><a href="#"><i class="fa-brands fa-instagram"></i></a
        ></span>
        <span class="footer-icon"
          ><a href="#"><i class="fa-brands fa-pinterest"></i></a
        ></span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  background-color: #161616;
  height: 150px;
  display: flex;
  align-items: center;
}
footer .logo {
  margin: 0;
}
footer .footer-icon {
  margin: 0 10px;
  font-size: 25px;
}
/* footer .text-end {
  display: inline;
  float: right;
} */
</style>
