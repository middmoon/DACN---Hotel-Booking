import axios from "axios";
import { logOutFailed, logOutStart, logOutSuccess, loginFailed, loginStart, loginSuccess } from "./authSlice";
const urlLogout = 'http://localhost:3030/v1/api/user/logout';
const urlLogin = 'http://localhost:3030/v1/api/user/login';
const loginHeaders = {
    'Content-Type': 'application/json'
};


function logoutHeaders(accessToken){
    return {

        'Authorization': `${accessToken}`,
        'Content-Type': 'application/json'
    }
};



 function AuthRoute(role, navigate) {
    switch (role) {
        case "USER":
            navigate("/")        
            break;
        case "HOTEL_MANAGER":
            navigate("/hotel-manage")
            break;
        case "ADMIN":
            navigate("/admin")
            break;
        default:
            break;
    }
 }

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const r = await axios.post(urlLogin,user, loginHeaders)
        dispatch(loginSuccess(r.data))
        AuthRoute(r.data.metadata.user.role, navigate);
    } catch (error) {
        dispatch(loginFailed())
    }
}



// export const logOut = async(dispatch, navigate,accessToken,axiosJWT) => {
//     dispatch(logOutStart())
//     try{
//         await axiosJWT.delete("http://localhost:3030/v1/api/user/logout",{
//             headers:{token: `${accessToken}`}
//         });
//         dispatch(logOutSuccess());
//         navigate("/");
//     }catch(error){
//         dispatch(logOutFailed());
//     }
// }

export const logOut = async(dispatch, accessToken, navigate) => {
    dispatch(logOutStart())
    try{
        
        await axios.delete(urlLogout, {
            headers: logoutHeaders(accessToken)
        });
        dispatch(logOutSuccess());
        navigate("/");
    }catch(error){
        dispatch(logOutFailed());
    }
}



  