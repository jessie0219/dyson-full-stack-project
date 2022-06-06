<template>

<CartItem
                v-for="item in items" :key="item.Id" :item="item"
                />

</template>

<script>

import { computed } from 'vue';
import { useStore } from 'vuex';
import CartItem from "@/components/CartItem";

export default {
    components:{
        CartItem
    },
  setup(){
      const store = useStore()
      const items = computed(() => store.state.cart)

      return {items}
  }
};
</script>
