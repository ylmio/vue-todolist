<template>
    <div id="iterm">
        <ul>
            <li>
                <i class="iconfont icon-select"></i>
                <span>Vue-课程讲解1</span>
            </li>
            <li>
                <i class="iconfont icon-noSelect"></i>
                <span>Vue-课程讲解2</span>
            </li>
            <li>
                <i class="iconfont icon-noSelect"></i>
                <span>Vue-课程讲解3</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Iterm"
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