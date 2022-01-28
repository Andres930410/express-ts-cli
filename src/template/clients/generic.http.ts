import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class GenericClient {
  private instance: AxiosInstance;

  constructor(url: string, timeout = 1000, headers = {}) {
    this.instance = axios.create({
      baseURL: url,
      headers: headers,
      timeout: timeout,
    });
  }

  async get<TResponse>(path = "/", cofing?: AxiosRequestConfig) {
    const result = (await this.instance.get(path, cofing)) as TResponse;
    return result;
  }

  async post<TRequest, TResponse>(
    path = "/",
    data: TRequest,
    cofing?: AxiosRequestConfig
  ) {
    const result = (await this.instance.post(path, data, cofing)) as TResponse;
    return result;
  }

  async put<TRequest, TResponse>(
    path = "/",
    data: TRequest,
    cofing?: AxiosRequestConfig
  ) {
    const result = (await this.instance.put(path, data, cofing)) as TResponse;
    return result;
  }

  async patch<TRequest, TResponse>(
    path = "/",
    data: TRequest,
    cofing?: AxiosRequestConfig
  ) {
    const result = (await this.instance.patch(path, data, cofing)) as TResponse;
    return result;
  }

  async delete<TResponse>(path = "/", cofing?: AxiosRequestConfig) {
    const result = (await this.instance.delete(path, cofing)) as TResponse;
    return result;
  }
}
