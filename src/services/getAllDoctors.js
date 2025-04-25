import { apiClient } from "./config";

// fetching all doctors
 export  const apiGetDoctors = async ()=>{
    return apiClient.get('/auth/doctors');
 }