import axios, {AxiosResponse, InternalAxiosRequestConfig} from "axios";

import {accessToken, baseURL} from "../constants";

type IResponse<T> = Promise<AxiosResponse<T>>
const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers!.Authorization = `Bearer ${accessToken}`
    return config
});
export type {
    IResponse
}

export {
    axiosService
};