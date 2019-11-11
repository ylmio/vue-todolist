<template>
  <div id="root">
    <Header
        :addItem="addItem"
    />
    <List
        :planList="planList"
        :delTodo="delTodo"
    />
    <Footer
        :planList="planList"
        :selectedAllItem="selectedAllItem"
        :clearFinishedItem="clearFinishedItem"
    />
  </div>
</template>

<script>
  //引入组件
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  //引入工具类
  import localStorageUtil from './utills/localStorageUtil'

  export default {
    name: 'app',
    components: {
      Header,
      List,
      Footer
    },
    data(){
      return{
          planList:localStorageUtil.readItems()
      }
    },
    methods:{
      //插入一条任务
      addItem(item){
        this.planList.unshift(item);
      },
      //根据索引删除一条记录
      delTodo(index){
        this.planList.splice(index,1);
      },
      //是否全部选中
      selectedAllItem(isCheck){
        this.planList.forEach(item=>{
          item.finished=isCheck;
        })
      },
      //清除选中任务
      clearFinishedItem:function(){
        this.planList = this.planList.filter(item=>!item.finished);
      }
    },
    watch:{
      //深度监视
      planList:{
        handler:localStorageUtil.saveItems(),
        deep:true,
        immediate:true,
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
