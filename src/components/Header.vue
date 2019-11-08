<template>
    <div>
        <header id="head">
            <h1>待办事项</h1>
        </header>
        <label for="addIterm">
            <input
                id="addIterm"
                type="text"
                placeholder="请输入待办事项，并按回车键添加"
                v-model="cont"
                @keyup.enter="addTodo()"
            />
        </label>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Header",
        props:{
            addItem:Function
        },
        data(){
            return{
                cont:""
            }
        },
        methods:{
            //动态添加日程数据
            addTodo(){
                //1.判断是否为空
                let cont = this.cont.trim();
                if(!cont){
                    alert("输入的任务不能为空！");
                    return false;
                }
                //2.生成一个item对象
                let item = {cont,finished:false};
                //3.调用父组件的插入方法
                this.addItem(item);
                //4.清空输入框
                this.cont = "";
            }
        }
    }
</script>

<style scoped>
    #head{
        font-size: 1.2rem;
    }
    #addIterm{
        margin-top: 1rem;
        width: 100%;
        border: 1px solid #2c3e50;
        height: 3rem;
        line-height: 3rem;
        padding-left: 1rem;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    #addIterm:focus{
        outline: none;
        border-color: darkorange;
    }

</style>