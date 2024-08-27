import apiClient from "./client";

export const getAll = async <T>(endpoint: string) => apiClient.get<T[]>(endpoint)