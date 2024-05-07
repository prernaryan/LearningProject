import {ConstNumber, Methods, baseUrl, errorTexts} from '@constants/index';
import {convertParamsToQueryString} from '../utils/helperFunction';
import {fetch as netinfo} from '@react-native-community/netinfo';
import {Platform} from 'react-native';

class Api {
  private static _instance: Api;
  private readonly baseURL: string;
  private authToken?: string | null;
  private needToRefreshToken: boolean;

  private constructor() {
    this.baseURL = baseUrl;
    this.needToRefreshToken = false;
  }

  public static getInstance(): Api {
    if (!Api._instance) {
      Api._instance = new Api();
    }
    return Api._instance;
  }

  private async refreshTokenNFetchAgain<T>(
    url: string,
    options?: RequestInit,
  ): Promise<T> {
    this.needToRefreshToken = true;
    //@ts-ignore
    this.needToRefreshToken = false;
    return this.fetchData<T>(url, options);
  }

  private async fetchData<T>(url: string, options?: RequestInit): Promise<T> {
    const {isConnected} = await netinfo();
    if (isConnected) {
      this.authToken = null;
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        device: Platform.OS,
      };
      if (this.authToken && !this.needToRefreshToken) {
        headers['Authorization'] = `${this.authToken}`;
      }
      const fetchOptions: RequestInit = {...options, headers};
      const fullUrl = this.baseURL + url;
      const response = await fetch(fullUrl, fetchOptions);
      const result = await response.json();
      if (
        response.status === ConstNumber.VALUE_401 &&
        result.message === errorTexts.jwtExpired
      ) {
        try {
          return await this.refreshTokenNFetchAgain<T>(url, options);
        } catch (refreshError) {
          this.needToRefreshToken = false;
          return Promise.reject(refreshError);
        }
      }
      let errorMessage = errorTexts.noResultFound;
      this.needToRefreshToken = false;
      if (!response.ok) {
        errorMessage = result?.data ?? errorTexts.somthingWentWrong;
        return Promise.reject(errorMessage);
      }
      return result as Promise<T>;
    } else {
      return Promise.reject(errorTexts.noInterNetConnection);
    }
  }

  public async get<T>(url: string, params?: any): Promise<T> {
    const fullUrl = params
      ? `${url}${convertParamsToQueryString(params)}`
      : url;
    return this.fetchData<T>(fullUrl, undefined);
  }

  public async post<T>(url: string, data: object): Promise<T> {
    return this.fetchData<T>(url, {
      method: Methods.POST,
      body: JSON.stringify(data),
    });
  }

  public async put<T>(url: string, data: object): Promise<T> {
    return this.fetchData<T>(url, {
      method: Methods.PUT,
      body: JSON.stringify(data),
    });
  }

  public async patch<T>(url: string, data: object): Promise<T> {
    return this.fetchData<T>(url, {
      method: Methods.PATCH,
      body: JSON.stringify(data),
    });
  }

  public async delete<T>(url: string): Promise<T> {
    return this.fetchData<T>(url, {
      method: Methods.DELETE,
    });
  }
}

const api = Api.getInstance();

export default api;
