<template>
  <Navbar></Navbar>
  <router-view />
  <Footer></Footer>
</template>

<script>
import Navbar from "./components/DysonNavbar.vue";
import Footer from "./components/DysonFooter.vue";
import Cart from "./components/ProductsCart.vue";
export default {
  components: {
    Navbar,
    Footer,
    Cart,
  },
  data() {},
  methods: {},
  watch: {},
  computed: {},
  props: [],
};
</script>

<style></style>
