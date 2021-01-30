import API from './api'

const AuthService = {
    login: async (data) => {
        return await API.post('/signin', data)
            .then(({ data }) => {
                setHeadersAndStorage(data)
                console.log("work", data);
                return data
            })
            .catch(err => {
                console.log("Auth service err", err);
                throw err
            })
    },
    loadUser: async (data) => {
        return await API.get('/currentuser', data)
            .then(({ data }) => {
                setHeadersAndStorage(data)
                console.log("work", data);
                return data
            })
            .catch(err => {
                console.log("Auth service err", err);
                throw err
            })
    },

    register: async (data) => {
        return await API.post('/signup', data)
            .then(({ data }) => {
                setHeadersAndStorage(data)
                return data
            })
            .catch(err => {
                console.log("Auth service err", err);
                throw err
            })
    },

    logout: () => {
        API.defaults.headers['Authorization'] = ''
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    },

    updateProfile: (data) => {
        const headers = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
        return API.post('/users/update', data, headers)
            .then(({ data }) => {
                localStorage.setItem('user', JSON.stringify(data))
                return data
            })
            .catch(err => {
                console.log("Auth service err", err);
                throw err
            })
    },
}

const setHeadersAndStorage = ({ user, token }) => {
    API.defaults.headers['Authorization'] = `Bearer ${token}`
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
}

export default AuthService