import api from './api'

export default {
    register(credentials) {
        return api().post('signup', credentials)
    },
    login(credentials) {
        return api().post('login', credentials)
    }
}