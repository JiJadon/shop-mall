import router from './router'
import NProgress from "nprogress"
import 'nprogress/nprogress.css'
import {getToken} from '@/utils/auth'

NProgress.configure({showSpinner: false})

const whiteList = ['/login', '/auth-redirect']


router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start()

    // determine whether the user has logged in
    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({path: '/'})
            NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
        } else {
            next()
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
