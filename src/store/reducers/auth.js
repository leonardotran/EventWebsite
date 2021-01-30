import { LOGIN, REGISTER, LOGOUT, UPDATE_PROFILE,LOGIN_ERROR,USER_LOADED } from '../types/index'

const initialState = {
    // user: JSON.parse(localStorage.getItem('user')) || {},
    // token: localStorage.getItem('token') || '',
    // isLoggedIn: !!localStorage.getItem('user'),

    user: {},
    token: '',
    isLoggedIn: false,
    isAuthenticated: null,
    objectStatus: null, 

}

const authReducer = (state = initialState, action) => {

    const { type, payload } = action

    console.log("payload", payload); 

    switch (type) {
        case LOGIN:
            return {
                ...state, 
                user: payload.user,
                token: payload.token,
                isLoggedIn: true,
                objectStatus: LOGIN,
            }

        case USER_LOADED:
            // API.defaults.headers['Authorization'] = `Bearer ${payload.token}`
            // localStorage.setItem('user', JSON.stringify(payload.user))
            // localStorage.setItem('token', payload.token)
            return {
                ...state,
                isLoggedIn: true,
                token: payload.token,
                user: payload.user,
            };

        case REGISTER:
            return {
                ...state, 
                user: payload.user,
                token: payload.token,
                isLoggedIn: true,
                
                objectStatus: REGISTER,
            }

        case LOGOUT:
            return {
                ...state, 
                user: {},
                token: '',
                isLoggedIn: false,
                objectStatus: LOGOUT,
            }
        case LOGIN_ERROR: 
            return {
                ...state, 
                user: {},
                token: '',
                isLoggedIn: false,
                objectStatus: LOGIN_ERROR,
            }


        default: {
            return state
        }
    }

}

export default authReducer