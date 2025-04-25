import { apiClient } from "./config"


// service to get patients profile 
export const apiGetProfile = async () =>{
    return apiClient.get("/auth/profile");
}