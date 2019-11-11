const LM_ITEM = "lm_item";
export default {
    readItems(){
        return JSON.parse(localStorage.getItem(LM_ITEM)||"[]");
    },
    saveItems(item){
        localStorage.setItem(LM_ITEM,JSON.stringify(item));
    }
}