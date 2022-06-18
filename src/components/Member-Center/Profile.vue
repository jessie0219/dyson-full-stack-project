<template>
<div class="container col-sm-8 col-md-9">
  <div class="row ">
    <table class="table-responsive caption-top">
 <caption class="text-dark mx-4 my-2">
  <i class="fa-solid fa-pen text-secondary"></i>
  編輯會員資料</caption>
  <tbody class="fw-bold">
    <div class="">
      <tr class=" ">
      <td  class="text-center">Name</td>
      <td><input type="text" class="col-7 bg-transparent border-0 border-bottom border-secondary"></td>
      <td class="text-center">EMAIL</td>
      <td><input type="text" class="col-11 my-5 bg-transparent border-0 border-bottom border-secondary"></td>
    </tr>
    </div>
    <div class="">
      <tr class="my-3 ">
      <td class="text-center my-4">Password</td>
      <td><button class="btn btn-secondary mx-4 btn-sm "> 更改密碼 </button></td>
      <td class="text-center my-4">儲存的地址</td>
      <td><button  class="btn btn-secondary btn-sm mx-4 my-5 ">新增地址</button></td>
    </tr>
    </div>
    
    <div class="">
      <tr class=" ">
      <td class="text-center">訂閱我們</td>
      <td class="fw-normal ">
        <div class="form-check form-check-inline mx-4">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label " for="inlineCheckbox1">發送至EMAIL</label>
       </div>
      <div class="form-check form-check-inline mx-4">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
            <label class="form-check-label" for="inlineCheckbox2">訂閱SMS</label>
      </div>
      </td>
    </tr>
    </div>
  </tbody>

  <table class="table table-responsive table-borderless my-5">
  <thead class="d-flex justify-content-end border-bottom-0 ">
    <tr>
      <th scope="" class="inline p-0"><button type="button" class="btn btn-sm btn-success fw-bold mx-1 text-center">確認修改</button></th>
      <th scope="" class="inline p-0"><button type="button" class="btn btn-sm btn-danger fw-bold mx-1">取消</button></th>      
    </tr>
  </thead>
 
  </table>
</table>
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

</style>