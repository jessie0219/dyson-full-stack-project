<template>
  <div class="col-12 col-sm-5 col-md-6 d-flex align-content-stretch g-5">
    <div class="card">
      <img :src="HairC.imgUrl" :alt="`image-${HairC.Name}`" class="card-img-top">
      <div class="card-body">
        
        <h5 class="card-title">{{ HairC.Name }}</h5>
        <p class="card-text">$<span>{{ HairC.Price }}</span><p>{{HairC.Description}}</p>
        </p>
        
        
        

      </div>
      <div class="d-flex justify-content-around">
        <!-- <button class="btn btn-dark" @click="addList(product)">heart</button> -->
        <button class="btn btn-dark" @click="add(HC)">加入購物車</button>
        </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default{
  props: ['HairC'],
  setup(){
    const store = useStore()
    const add = HairC => {
      store.dispatch('addToCart3', HairC)
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