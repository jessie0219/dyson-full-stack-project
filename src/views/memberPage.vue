<template>
  <!-- <div class="container button my-4  ">
  <div class="row d-flex justify-content-center">
  <div class="btn-group m-5 " role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary fw-bold mx-1" @click="tabChange(ProfilePage)">會員資訊</button>
    <button type="button" class="btn btn-secondary fw-bold mx-1" @click="tabChange(ContactPage)">訂單</button>
    <button type="button" class="btn btn-secondary fw-bold mx-1" @click="tabChange(OrderPage)">聯絡我們</button>
</div>
    </div>

    <div class="col-md-7 my-5 ">
      <div class="row d-flex justify-content-center">
      <div class="" v-is="changeView"></div>

      </div>

    </div>

  </div> -->
 <div class="container button  ">
  <div class=" my-5">
<table class="table table-borderless ">
  <thead class="d-flex justify-content-center border-bottom-0 ">
    <tr>
      <th scope="" class="inline p-0"><button type="button" class="btn btn-secondary fw-bold mx-1 text-center" @click="tabChange(ProfilePage)">會員資訊</button></th>
      <th scope="" class="inline p-0"><button type="button" class="btn btn-secondary fw-bold mx-1" @click="tabChange(OrderPage)">我的訂單</button></th>      
      <th scope="" class="inline p-0"><button type="button" class="btn btn-secondary fw-bold mx-1" @click="tabChange(ContactPage)">訊息我們</button></th>
    </tr>
  </thead>
  <tbody>
          <div class="row d-flex justify-content-center my-4 ms-5">

          <div class="" v-is="changeView"></div>
          </div>
  </tbody>
  </table>
           </div>
    </div>
 


    
   


</template>

<script>
import ProfilePage from "../components/Member-Center/Profile.vue";
import ContactPage from "../components/Member-Center/Contact.vue";
import OrderPage from "../components/Member-Center/Order.vue";

export default {
  components: { ProfilePage, ContactPage , OrderPage},
  data() {
    return {
      ProfilePage: ProfilePage,
      ContactPage: ContactPage,
      OrderPage: OrderPage,
      changeView: ProfilePage,
    };
  },
  methods: {
    tabChange(tabItem) {
      this.changeView = tabItem;
    },
  },
  computed: {},
};
</script>

<style>
body {
  background-color: #b8aa95;
}
.button {
  height: 80vh;
}
</style>
