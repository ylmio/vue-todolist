<template>
    <div id="iterm">
        <ul>
            <li v-for="(item,index) in planList" v-bind:key="item.index" @click="choose($event,index)">
                <i class="iconfont icon-noSelect"></i>
                <span>{{item.cont}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Iterm",
        data(){
            return{
                planList:[
                    {
                        check:false,
                        cont:"Vue-课程讲解1"
                    },
                    {
                        check:false,
                        cont:"Vue-课程讲解2"
                    },
                    {
                        check:false,
                        cont:"Vue-课程讲解3"
                    },
                    {
                        check:false,
                        cont:"Vue-课程讲解4"
                    },
                ]
            }
        },
        methods:{
            choose:function(e,idx){
                // //获取点击元素的第一个子元素
                // var i = e.currentTarget.firstElementChild;
                // console.log(i);
                // if (i.className.indexOf("icon-select") === -1) {
                //     i.className = "iconfont icon-select"; //切换按钮样式
                //     //写逻辑
                // } else {
                //     i.className = "iconfont icon-noSelect";//切换按钮样式
                //     //写逻辑
                // }

                var check = this.planList[idx].check;

                if(check===false){
                    console.log(idx,check);
                    check.className = "iconfont icon-select";
                }
                // this.planList[idx].check = check === true ? false : true;
            }
        }
    }
</script>

<style scoped>
    #iterm>ul>li{
        display: flex;
        height: 3rem;
        line-height: 3rem;
        border: 1px solid #cccccc;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        padding-left: 1rem;
        cursor: pointer;
        margin: 1rem 0;
    }
    #iterm>ul>li>span{
        display: inline-block;
        margin-left: 1rem;
    }

</style>