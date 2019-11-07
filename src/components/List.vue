<template>
    <div id="list">
        <ul>
            <Iterm
                    v-for="(item,index) in planList"
                    v-bind:key="item.index"
                    :item="item"
                    @click="choose($event,index)"
            />
        </ul>
    </div>
</template>

<script>
    import Iterm from "./Iterm"
    export default {
        name: "List",
        props:{
            planList:Array
        },
        components:{
            Iterm
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

</style>