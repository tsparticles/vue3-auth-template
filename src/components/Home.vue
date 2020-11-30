<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- component matched by the route will render here -->
    <router-link to="/login">Go to Login view</router-link>
    <router-link to="/register">Go to Register view</router-link>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
</style>