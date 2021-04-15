<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <div class="footer">
      <a href="https://www.linkedin.com/in/charles-rabbat-046714148/">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.instagram.com/madmultimedia/">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
body {
  margin: 0;
}

.footer {
  position: fixed;
  top: 4rem;
  left: 0;
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  justify-content: center;
  a > i {
    font-size: 1.4rem;
    padding: 1rem;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  top: 0;
  right: 0;
  z-index: 100;
  padding: 30px;
  font-size: 1.2rem;
  a {
    font-weight: bold;
    color:#20303f;;

    &.router-link-exact-active {
      color: #7ea6a6  ;
    }
  }
}
</style>
