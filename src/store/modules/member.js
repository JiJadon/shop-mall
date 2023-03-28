import {getToken, setToken, removeToken} from "@/utils/auth";
import {login, logout, getInfo} from "@/api/member";

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    username: '',
    id: '',
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USERNAME: (state, username) => {
        state.username = username
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ID: (state, id) => {
        state.id = id
    }
}

const actions = {
    login({commit}, userInfo) {
        const {username, password} = userInfo
        return new Promise((resolve, reject) => {
            login(username.trim(), password).then(response => {
                commit('SET_TOKEN', response.data.token)
                setToken(response.data.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    getInfo({commit, state}) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
                const {data} = response
                if (!data) {
                    reject('Verification failed, please Login again.')
                }
                const {name, avatar, username, id} = data.member
                commit('SET_NAME', name)
                commit('SET_AVATAR', avatar)
                commit('SET_USERNAME', username)
                commit('SET_ID', id)
                resolve(data.member)
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout({commit, state, dispatch}) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
