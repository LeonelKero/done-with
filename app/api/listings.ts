import { Post } from "../screens/listings/ListingsScreen"
import apiClient from "./client"

const endpoint = "/posts"

const fetchListings = () => apiClient.get<Post[]>(endpoint)

export default { fetchListings }