<template>
    <li>
        <i class="iconfont icon-noSelect"></i>
        <span>{{item.cont}}</span>
    </li>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Iterm",
        props:{
            item:Object
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