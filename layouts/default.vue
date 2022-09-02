<template>
  <div id="app">
    <nav>
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/todos">Tasks</nuxt-link> |
      <router-link to="/add">Add Todo</router-link>

    </nav>
    <nuxt/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
