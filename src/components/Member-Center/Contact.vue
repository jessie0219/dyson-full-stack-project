<template>
<div class="container col-8 my-5">

  <div class="card text-center">
  <div class="card-header fw-bold">
    <i class="fa-solid fa-pen-to-square"></i>
    Contact US
  </div>
  
  <div class="card-body ">
    <h5 class="card-title"><div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label  >輸入訊息...</label>
</div></h5>
    <p class="card-text text-secondary">記得先登入會員，我們才能回復訊息至您的Email喔~</p>
    <a href="#" class="btn btn-secondary">傳送</a>
  </div>
  
</div>
  
</div>
 

</template>

<script>
import memberPage from "@/views/memberPage.vue"

export default {
  components: { memberPage },

}
</script>

<style>
.button {
  height: 80vh;
}
</style>