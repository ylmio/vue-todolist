const LM_ITEM = "lmitem";
//坑，const LM_ITEM = "lm_item";这种声明会报错，不知道什么原因
export default {
    readItems(){//取数据
        return JSON.parse(localStorage.getItem(LM_ITEM)||"[]");
    },
    saveItems(item){//写数据
        localStorage.setItem(LM_ITEM,JSON.stringify(item));
    }
}