import AuthService from '../../services/authService'
import { LOGIN, REGISTER, 
    LOGOUT, UPDATE_PROFILE,
    LOGIN_ERROR ,USER_LOADED} from '../types/index'
import axios from 'axios'; 

export const loadUser = () => (dispatch, getState) => {
    // User loading
    //dispatch({ type: USER_LOADING });
        console.log("token", localStorage.getItem('token'))

        return AuthService.loadUser()
        .then(data => dispatch({
            type: USER_LOADED,
            payload: data
        }))
        .catch(err => {
            console.log("error with auth", err.response);
            // dispatch(returnErrors(err.response.data, err.response.status));
            // dispatch({
            //     type: AUTH_ERROR
            // })
        });
};


//Setup config/headers and token
export const tokenConfig = getState => {
    // Get token from local storage
    console.log('getstate',getState());
    // const token = getState().auth.token;
    // console.log("getting token", token);
    // const config = {
    //     headers: {
    //         "Content-type": "application/json"
    //     }
    // }

    // //If token, add to headers
    // if(token) {
    //     config.headers['x-auth-token'] = token;
    // }


    // console.log("config",config);
    // return config;
}

export const login = (params) => dispatch => {
    return AuthService.login(params)
        .then(data => {
            dispatch({ type: LOGIN, payload: data })
            console.log("data", {payload: data}); 
            return null;
        })
        .catch(err => {
            // dispatch({ type: LOGIN_ERROR })
            console.log("err", err.response); 
            return err
        })
}

export const register = (params) => dispatch => {
    return AuthService.register(params)
        .then(data => {
            dispatch({ type: REGISTER, payload: data })
            
        })
        .catch(err => {

        })
}

export const logout = () => dispatch => {
    AuthService.logout()
    dispatch({ type: LOGOUT })
}

// export const updateProfile = (params) => dispatch => {
//     return AuthService.updateProfile(params)
//         .then(data => {
//             dispatch({ type: UPDATE_PROFILE, payload: data })
//         })
//         .catch(err => {
//             throw err
//         })
// }