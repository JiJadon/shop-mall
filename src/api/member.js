import request from "/src/utils/request"

export function login(username, password) {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            username,
            password,
        }
    })
}

export function getInfo(token) {
    return request({
        url: '/user/info',
        method: 'post',
        data: {token}
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}

export function updateUser(user) {
    return request({
        url: `/user/update`,
        method: 'put',
        data: user
    })
}

export function getProfile(id) {
    return request({
        url: `/user/profile/${id}`,
        method: 'get',
    })
}
