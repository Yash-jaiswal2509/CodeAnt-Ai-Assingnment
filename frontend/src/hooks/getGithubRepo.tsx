/**
 * Custom hook to fetch data from GitHub API.
 * @param {string} url - The endpoint of the GitHub API (e.g., "/users/{username}/repos").
 * @param {object} options - Optional configuration for the API request (e.g., headers).
 * @returns {object} - { data, isLoading, error }
 */


import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

interface GithubFetchOptions extends AxiosRequestConfig { }

interface GithubFetchResult<T> {
    data: T | null;
    isLoading: boolean;
    error: AxiosError | null;
}

export const useGithubFetch = <T,>(url: string, options: GithubFetchOptions = {}): GithubFetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get<T>(`https://api.github.com${url}`, options);
                setData(response.data);
            } catch (err) {
                setError(err as AxiosError);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading, error };
};
