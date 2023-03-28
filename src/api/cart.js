import request from "@/utils/request";

export default {
    addToCart(item) {
        return request({
            url: `/api/cart/add`,
            method: 'post',
            data: item,
        })
    },
    showCartInfo(key) {
        return request({
            url: `/api/cart/get/${key}`,
            method: 'get'
        })
    },
    delFromCart(key, filed) {
        return request({
            url: `/api/cart/delete/${key}/${filed}`,
            method: 'delete',
        })
    }
}