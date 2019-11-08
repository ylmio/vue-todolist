<template>
    <li
        @mouseenter="dealShow(true)"
        @mouseleave="dealShow(false)"
        :style="{background:bgColor}"
    >
        <label>
            <input type="checkbox" v-model="item.finished">
            <span>{{item.cont}}</span>
        </label>
        <button class="delbtn" v-show="isShowBtn" @click="deleteIterm">删除</button>
    </li>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Iterm",
        props:{
            item:Object
        },
        data(){
            return{
                isShowBtn:false,
                bgColor:"#ffffff"
            }
        },
        methods:{
            dealShow(isShow){
                //控制删除按钮的显示与隐藏
                this.isShowBtn = isShow;
                //动态控制样式
                this.bgColor = isShow ? "#dddddd":"#ffffff"
            },
            deleteIterm(){

            }
        }

    }
</script>

<style scoped>
    #list>ul>li{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        border: 1px solid #cccccc;
        border-radius: 2px;
        margin: 1rem 0;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 1rem;
        height: 4rem;
        line-height: 4rem;
        align-items: center;
    }
    #list>ul>li>label{
        cursor: pointer;
    }
    #list>ul>li>label>input{
        vertical-align: middle;
    }
    #list>ul>li>label>span{
        display: inline-block;
        margin-left: 1rem;
    }
    .delbtn{
        color: #ffffff;
        background: red;
        outline: none;
        border: 0;
        padding: 3px 1rem;
        border-radius: 2px;
        cursor: pointer;
        height: 3rem;
    }
    .bgColor{
        background: red;
    }
</style>