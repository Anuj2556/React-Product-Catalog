import apiClient , {requestWithRetry} from "./client";

export function getProducts(){
    return requestWithRetry(()=>apiClient.get('/products'))
}