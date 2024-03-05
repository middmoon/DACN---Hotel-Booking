import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart());
    try{
        const res = axios.post("v1/api/user/login ",user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    }catch(err){
        dispatch(loginFailed());
    }
}