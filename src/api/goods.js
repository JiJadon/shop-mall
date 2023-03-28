import request from "@/utils/request";

export default {
    getBanner(id) {
        return request({
            url: `/api/goods/banner/${id}`,
            method: 'get',
        })
    },
    getCategories() {
        return request({
            url: `/api/goods/category`,
            method: 'get'
        })
    },
    getGoodsList(category2Id) {
        return request({
            url: `/api/goods/goodsList/${category2Id}`,
            method: 'get'
        })
    },
    getGoodsInfo(id){
        return request({
            url :`/api/goods/${id}`,
            method:'get'
        })
    },
    getCategory2Info(category2Id){
        return request({
            url:`/api/goods/category2Info/${category2Id}`,
            method:'get'
        })
    }

}