<template>
  <div class="col-12 col-sm-5 col-md-4 d-flex align-content-stretch g-5">
    <div class="card">
      <img :src="AirT.imgUrl" :alt="`image-${AirT.Name}`" class="card-img-top">
      <div class="card-body">
        
        <h5 class="card-title">{{ AirT.Name }}</h5>
        <p class="card-text">$<span>{{ AirT.Price }}</span><p>{{AirT.Description}}</p>
        </p>
        
        
  

      </div>
      <div class="d-flex justify-content-around">
        <!-- <button class="btn btn-dark" @click="addList(product)">heart</button> -->
        <button class="btn btn-dark" @click="add(AirT)">加入購物車</button>
        </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default{
  props: ['AirT'],
  setup(){
    const store = useStore()
    const add = AirT => {
      store.dispatch('addToCart2', AirT)
    }
    // const addList = product => {
    //   store.dispatch('addToList', product)
    // }

    return { add }

  }
}
</script>

<style scoped>
.card-img-top img
{
    width: 80%;
}
</style>