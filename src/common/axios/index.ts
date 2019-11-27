import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AsyncStorage } from 'react-native';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    async (value: AxiosRequestConfig) => {
        const headersValues: [string, string][] = await AsyncStorage.multiGet(['accessToken', 'email']);
        value.headers = {
            ...value.headers,
            Authentication: headersValues[0][1],
            'X-User-Email': headersValues[1][1]
        };
        return value;
    },
    function(error) {
        return Promise.reject(error);
    }
);
