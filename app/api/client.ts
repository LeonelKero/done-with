import { create } from "apisauce";

const apiClient = create({ baseURL: "http://127.0.0.1:8989/api/v1/posts" })

export default apiClient