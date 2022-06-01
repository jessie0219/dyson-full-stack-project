<template>
  <Navbar></Navbar>
  <router-view />
  <Footer></Footer>
</template>

<script>
import Navbar from "./components/DysonNavbar.vue";
import Footer from "./components/DysonFooter.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {},
  methods: {},
  watch: {},
  computed: {},
  props: [],
};
</script>

<style></style>
