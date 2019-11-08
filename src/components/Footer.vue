<template>
    <div id="foot">
        <div>
            <label>
                <input type="checkbox" id="selectAll" v-model="isCheck">
            </label>
            <p>已选 <span id="beSel">{{finishedCount}}</span> 件</p>
            <b class="gap">/</b>
            <p>总计 <span id="all">{{planList.length}}</span> 件</p>
        </div>
        <input type="button" id="clear" @click="clearFinishedItem" value="清除已完成的任务">
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "Footer",
        props:{
            planList:Array,
            selectedAllItem:Function,
            clearFinishedItem:Function
        },
        methods:{

        },
        computed:{
            finishedCount(){
                //默认调用get方法
                return this.planList.reduce((total,item)=>total+(item.finished?1:0),0);
            },
            isCheck:{
                get(){
                  return this.finishedCount === this.planList.length&&this.planList.length>0;
                },
                set(val){
                    this.selectedAllItem(val);
                }
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
        vertical-align: middle;
    }
    #clear:active{
        position: relative;
        top: 1px;
    }

</style>