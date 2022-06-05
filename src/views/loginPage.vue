<template>
  <div class="button m-5">
    <div class="text-center">
      <button
        type="submit"
        class="btn btn-secondary mx-3"
        @click="tabChange(Login)"
      >
        Login
      </button>
      <button
        type="submit"
        class="btn btn-secondary mx-3"
        @click="tabChange(Sign)"
      >
        Sign up
      </button>
    </div>
    <div v-is="changeView"></div>
  </div>

  <!-- <Login></Login>
  <Sign></Sign> -->
</template>

<script>
import Login from "../components/LogIn.vue";
import Sign from "../components/SignUp.vue";

export default {
  components: { Login, Sign },
  data() {
    return {
      Login: Login,
      Sign: Sign,
      changeView: Login,
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
  height: 100vh;
}
</style>
