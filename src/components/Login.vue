<template>
  <div>
    <Particles id="tsparticles" :options="particlesConfig" />

    <main class="box">
      <h2>Login</h2>
      <form>
        <div class="inputBox">
          <label for="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="type your username"
            required
          />
        </div>
        <div class="inputBox">
          <label for="userPassword">Password</label>
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="type your password"
            required
          />
        </div>
        <div>
          <button type="submit" name="" style="float: left">Submit</button>
          <router-link class="button" style="float: left" to="/register"
            >Register</router-link
          >
        </div>
      </form>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import particlesConfig from "../assets/particles.json";

export default {
  name: "Login",
  data: function () {
    return {
      particlesConfig,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}

header {
  display: none;
}

.box {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
  margin: auto auto;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
}

.box h2 {
  margin: 0 0 30px 0;
  padding: 0;
  color: #fff;
  text-align: center;
}

.box .inputBox label {
  color: #fff;
}

.box .inputBox input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 30px;
  outline: none;
  padding: 10px 0;
  width: 100%;
}

.box input[type="submit"],
.box button[type="submit"],
a.button {
  font-family: sans-serif;
  background: #03a9f4;
  font-size: 11px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 20px;
  letter-spacing: 2px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2px 10px 2px 0;
  display: inline-block;
}

.box input[type="submit"]:hover,
.box button[type="submit"]:hover,
a.button:hover {
  opacity: 0.8;
}

#tsparticles {
  position: fixed;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>