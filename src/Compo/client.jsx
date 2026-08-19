import axios from "axios";

const apiClient = axios.create({
    baseURL:"https://dummyjson.com",
    timeout:3000
})

export async function requestWithRetry(
    requestFunction,
    retries=3,
    delay=1000,
){
    try {
        return await requestFunction();
    } catch (error) {
        const status=error.response?.status;
        const shouldRetry = !status || status >=500;

        if(!shouldRetry || retries === 0){
            throw error;
        }
        await new Promise((resolve)=>setTimeout(resolve,delay))

        return requestWithRetry(requestFunction,retries-1,delay)
    }
}

export default apiClient;