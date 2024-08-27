import { getAll } from "./doneWithApi";

interface Author {
    id: number
    firstname: string
    lastname: string
    email: string
}

const endpoint = '/authors'

const getAuthors = async () => {
    await getAll<Author>(endpoint).then(res => {
        if (!res.ok) {
            console.log("Error", res.problem)
        }
        return res.data
    })
}