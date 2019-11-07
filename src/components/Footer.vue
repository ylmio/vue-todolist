<template>
    <div id="foot">
        <div>
            <i class="iconfont icon-noSelect" id="selectAll" @click="selectAll"></i>
            <p>已选 <span id="beSel">{{}}</span> 件</p>
            <b class="gap">/</b>
            <p>总计 <span id="all">{{}}</span> 件</p>
        </div>
        <input type="button" id="clear" @click="clear" value="清除已完成的任务">
    </div>
</template>

<script>
    export default {
        name: "Footer",
        methods:{
            selectAll:function(){
                alert(this);

            },
            clear:function(){
                alert("cccc");
            }
        }
    }
</script>

<style scoped>
    #foot{
        display: flex;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.4rem;
        flex-direction: row;
        justify-content: space-between;
    }
    #foot>div{
        display: flex;
        margin-left: 1rem;
    }
    #foot>div>.gap{
        margin: 0 0.5rem;
    }
    #clear{
        cursor: pointer;
        background: darkorange;
        border: none;
        outline: none;
        color: #ffffff;
        padding: 0 1rem;
        border-radius: 2px;
    }
    #selectAll{
        margin-right: 1rem;
        cursor: pointer;
    }
    #clear:active{
        position: relative;
        top: 1px;
    }

</style>