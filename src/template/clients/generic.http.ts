import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { tryCatch } from "@/decorators/controllers/tryCatch.decorator";

@tryCatch
export class GenericClient {
  private instance: AxiosInstance;

  constructor(url: string, timeout = 1000, headers = {}) {
    this.instance = axios.create({
      baseURL: url,
      headers: headers,
      timeout: timeout,
    });
  }

  async get<TResponse>(path = "/", config?: AxiosRequestConfig): Promise<TResponse> {
    const result = (await this.instance.get(path, config))
    return result.data as TResponse;
  }

  async post<TRequest, TResponse>(
    path = "/",
    data: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const result = (await this.instance.post(path, data, config));
    return result.data as TResponse;
  }

  async put<TRequest, TResponse>(
    path = "/",
    data: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const result = (await this.instance.put(path, data, config));
    return result.data as TResponse;
  }

  async patch<TRequest, TResponse>(
    path = "/",
    data: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const result = (await this.instance.patch(path, data, config));
    return result.data as TResponse;
  }

  async delete(path = "/", config?: AxiosRequestConfig): Promise<void> {
    await this.instance.delete(path, config);
  }
}
