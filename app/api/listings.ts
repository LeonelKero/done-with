import apiClient from "./client"

const endpoint = "/"

const fetchListings = () => apiClient.get(endpoint)

export default { fetchListings }