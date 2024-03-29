import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000" });

export const setToken = (token: string) => {
    api.defaults.headers.common['Authorization'] = token;
};

export const postData = async (endpoint: string, body: any) => {
    const { data } = await api.post(endpoint, body);
    return data;
};

export const requestData = async (endpoint: string) => {
    const { data } = await api.get(endpoint);
    return data;
};

export const putData = async (endpoint:string, body:any) => {
    const { data } = await api.put(endpoint, body);
    return data;
};

export const deleteData = async (endpoint: any) => {
    const { data } = await api.delete(endpoint);
    return data;
};
