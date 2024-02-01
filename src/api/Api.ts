
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import http  from './config/AxiosSetup';
import QueryString from "query-string";

export default class Api {
  static async get<T>(uri: string, params?: AxiosRequestConfig): Promise<AxiosResponse<T, T>> {
    return await http.get<T>(uri, { params, paramsSerializer: p => QueryString.stringify(p) }).catch(error => { console.log(error); throw error });
  }  

  static async post(uri: string, body: AxiosRequestConfig) {
    return await http.post(uri, body).catch(error => { console.log(error); throw error });
  }

  static async put(uri: string, body: AxiosRequestConfig) {
    return await http.put(uri, body).catch(error => { console.log(error); throw error });
  }

  static async delete(uri: string, body?: AxiosRequestConfig) {
    return await http.delete(uri, body).catch(error => { console.log(error); throw error });
  }

  static async patch(uri: string, body: AxiosRequestConfig) {
    return await http.patch(uri, body).catch(error => { console.log(error); throw error });
  }
}