<template>
 <div class="container col-8">
<div class="row ">
  <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-dark"
  @click="tabChange(Profile)"
  >個人資訊</button>
  <button type="button" class="btn btn-outline-dark"
   @click="tabChange(Order)"
  >訂單</button>
  <button type="button" class="btn btn-outline-dark"
   @click="tabChange(Contact)"
  >聯絡我們</button>
  <button type="button" class="btn btn-outline-dark"
  @click="tabChange(TrackItem)"
  >追蹤清單</button>
</div>

<div>
    <div v-is="changeView"></div>
</div>
</div>


 </div>
</template>

<script>
import Profile from "../components/Member-Center/Profile.vue";
import Order from "../components/Member-Center/Order.vue";
import Contact from "../components/Member-Center/Contact.vue";
import TrackItem from "../components/Member-Center/TrackItem.vue";

export default {
  components: { Profile, Order, Contact, TrackItem},
  data(){
    return{
        Profile: Profile,
        Order: Order,
        Contact: Contact,
        TrackItem: TrackItem,
        ChangeView: Profile
    };
  },
  methods:{
     tabChange(tabItem) {
      this.changeView = tabItem;
    },
  }

}
</script>

<style>

</style>