import {createStore} from 'vuex'
import member from "@/store/modules/member";
import getters from "@/store/getters";

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

const store = createStore({
    getters,
    modules,
    member,
})

export default store