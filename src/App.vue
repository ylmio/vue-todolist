<template>
  <div id="root">
    <Header />
    <List
          :planList="planList"
          :delTodo="delTodo"
    />
    <Footer />
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
  },
  data(){
    return{
      planList:[
        {
          finished:false,
          cont:"Vue-课程讲解1"
        },
        {
          finished:false,
          cont:"Vue-课程讲解2"
        },
        {
          finished:false,
          cont:"Vue-课程讲解3"
        },
        {
          finished:false,
          cont:"Vue-课程讲解4"
        },
      ]
    }
  },
  methods:{
    delTodo(index){
      //根据索引删除一条记录
      this.planList.splice(index,1);
    }
  }
}
</script>

<style>
#root {
  font-size: 1.4rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 6rem auto;
  width: 50%;
  padding: 1rem;
  border: 1px solid #000000;
  border-radius: 0.2rem;
}
</style>
