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

  async get<TResponse>(path = "/", cofing?: AxiosRequestConfig): Promise<TResponse> {
    const result = (await this.instance.get(path, cofing))
    return result.data as TResponse;
  }

  async post<TRequest, TResponse>(
    path = "/",
    data: TRequest,
    cofing?: AxiosRequestConfig
  ): Promise<TResponse> {
    const result = (await this.instance.post(path, data, cofing));
    return result.data as TResponse;
  }

  async put<TRequest, TResponse>(
    path = "/",
    data: TRequest,
    cofing?: AxiosRequestConfig
  ): Promise<TResponse> {
    const result = (await this.instance.put(path, data, cofing));
    return result.data as TResponse;
  }

  async patch<TRequest, TResponse>(
    path = "/",
    data: TRequest,
    cofing?: AxiosRequestConfig
  ): Promise<TResponse> {
    const result = (await this.instance.patch(path, data, cofing));
    return result.data as TResponse;
  }

  async delete(path = "/", cofing?: AxiosRequestConfig): Promise<void> {
    await this.instance.delete(path, cofing);
  }
}
