<template>
            <div class="cartItem row align-items-start">
          <div class="col-3 mb-2">
            <img
              class="w-100"
              img :src="item.imgUrl" :alt="`image-${item.Name}`"
            />
          </div>
          <div class="col-5 mb-2">
            <h4 class="text-start">{{item.Name}}</h4>
            <h5 class="text-dark" id="cartItem1Price">NT. {{item.Price}}</h5>
          </div>
          <div class="col-2">
            <div class="d-flex">
              <button class="btn btn-primary" @click="increase(item.Id)">+</button>
              <div class="cartItemQuantity mx-1 px-4 py-2 text-center">{{item.quantity}}</div>
              <button class="btn btn-primary" @click="reduce(item.Id)">-</button>
            </div>
            <div class="my-3">小計: NT.{{item.Price * item.quantity}}</div>
          <div class="my-2 btn btn-danger" @click="remove(item.Id)">Delete</div>
          </div>
        </div>
        <hr />
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: ['item'],
  setup(){
    const store = useStore()
    const increase = Id => {store.commit('increase', Id)}
    const reduce = Id => {store.commit('reduce', Id)}
    const remove = Id => {store.commit('remove', Id)}


    return {increase, reduce, remove}
  }
};

</script>

<style scoped>
img
{
    width:80%
}
</style>