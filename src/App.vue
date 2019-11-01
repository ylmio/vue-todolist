<template>
  <div id="root">
    <Header></Header>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style>
#root {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 6rem auto;
  width: 80%;
  padding: 1rem;
  border: 1px solid #dddddd;
  border-radius: 0.5rem;
}
</style>
