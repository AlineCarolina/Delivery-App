import axios from "axios"

const api = axios.create({ baseURL: "http://localhost:3000" });

export const postData = async (endpoint: string, body: any) => {
    const { data } = await api.post(endpoint, body);
    return data;
};

export const setToken = (token: string) => {
    api.defaults.headers.common.authorization = token;
};

export const requestData = async (endpoint: string) => {
    const { data } = await api.get(endpoint);
    return data;
};
