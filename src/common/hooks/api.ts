import { useState, useEffect } from 'react';
import { axiosInstance } from '../axios';

// tslint:disable-next-line: no-any
export const useFetchApi = (initialUrl: string): any => {
    const [data, setData] = useState();
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let isMount = true;

        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axiosInstance.get(url);
                setData(result.data);
            } catch (error) {
                alert('Oops, something went wrong');
                setIsError(true);
            }
            setIsLoading(false);
        };

        if (isMount) {
            fetchData();
        }

        return () => {
            isMount = false;
        };
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
};

