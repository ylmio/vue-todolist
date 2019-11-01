<template>
    <div id="List">
        <Iterm></Iterm>
    </div>
</template>

<script>
    import Iterm from "./Iterm";
    export default {
        name: "List",
        components:{
            Iterm
        }
    }
</script>

<style scoped>
    #List{
        margin-top: 1rem;
        font-size: 1.4rem;
    }
</style>