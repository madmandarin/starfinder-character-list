<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100;300;400;600;700&family=Neucha&display=swap');

* {
  font-family: 'Exo 2', sans-serif;
  color: #333;
}
#app {
  font-family: 'Exo 2', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
  display: none;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media print {
  * {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
</style>
