<template>
    <div>
        <header id="head">
            <h1>待办事项</h1>
        </header>
        <label for="addIterm">
            <input id="addIterm" type="text" placeholder="请输入待办事项，并按回车键添加">
        </label>
    </div>
</template>

<script>
    export default {
        name: "Header"
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