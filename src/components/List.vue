<template>
    <div id="list">
        <ul>
            <Iterm
                v-for="(item) in planList"
                v-bind:key="item.index"
                v-bind:item="item"
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

        },
        computed:{

        }
    }
</script>

<style scoped>

</style>