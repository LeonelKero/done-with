import apiClient from "./client";

export const getAll = async <T>(endpoint: string) => apiClient.get<T[]>(endpoint)

export const getOne = async <T>(endpoint: string) => apiClient.get<T>(endpoint)

export const deleteOne = async <T>(endpoint: string) => apiClient.delete<T>(endpoint)