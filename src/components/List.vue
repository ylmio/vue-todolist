<template>
    <div id="list">
        <ul>
            <li v-for="(item,index) in planList" v-bind:key="item.index" @click="choose($event,index)">
                <i class="iconfont icon-noSelect"></i>
                <span>{{item.cont}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "List",
        props:{
            planList:Array
        },
        components:{

        },
        methods:{
            choose:function(e){
                //获取点击元素的第一个子元素
                var i = e.currentTarget.firstElementChild;
                if (i.className.indexOf("icon-select") === -1) {
                    i.className = "iconfont icon-select"; //切换按钮样式
                    //写逻辑
                } else {
                    i.className = "iconfont icon-noSelect";//切换按钮样式
                    //写逻辑
                }
            }
        },
        computed:{

        }
    }
</script>

<style scoped>
    #list>ul>li{
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
    #list>ul>li>span{
        display: inline-block;
        margin-left: 1rem;
    }
</style>