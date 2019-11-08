<template>
    <div id="list">
        <ul>
            <Iterm
                v-for="(item,index) in planList"
                :key="item.index"
                :item="item"
                :index="index"
                :delTodo="delTodo"
            />
        </ul>
    </div>
</template>

<script>
    import Iterm from "./Iterm"
    export default {
        name: "List",
        props:{
            planList:Array,
            delTodo:Function
        },
        components:{
            Iterm
        },
        data(){
            return{

            }
        },
        methods:{

        },
        computed:{

        }
    }
</script>

<style scoped>

</style>