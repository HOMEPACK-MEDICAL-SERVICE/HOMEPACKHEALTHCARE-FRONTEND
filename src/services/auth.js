import { apiClient } from "./config";

// function service sign UP
export const apiSignup = async(payload) =>{
    return apiClient.post("/auth/signup", payload, {
        headers: { "Content-Type": "application/json"},
    });
}

// function service login 
export const apiLogin = async (payload) => {
    return apiClient.post("auth/login" ,payload, {
        headers: {"Content-Type": "application/json"},
    });
}
