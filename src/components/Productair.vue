<template>
  <div class="col-12 col-sm-5 col-md-4 d-flex align-content-stretch g-5">
    <div class="card" v-if="product.Id>15 && product.Id<27">
      <img :src="product.imgUrl" :alt="`image-${product.Name}`" class="card-img-top">
      <div class="card-body">
        
        <h5 class="card-title">{{ product.Name }}</h5>
        <p class="card-text">$<span>{{ product.Price }}</span><p>{{product.Description}}</p>
        </p>
        
        
        

      </div>
      <div class="d-flex justify-content-around">
        <!-- <button class="btn btn-dark" @click="addList(product)">heart</button> -->
        <button class="btn btn-dark" @click="add(product)">加入購物車</button>
        </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default{
  props: ['product'],
  setup(){
    const store = useStore()
    const add = product => {
      store.dispatch('addToCart', product)
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