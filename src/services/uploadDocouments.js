import { apiClient } from "./config"


// service to upload documents
export const apiFileUpload = async (payload)=>{
    return apiClient.post("/files/upload",payload);
}