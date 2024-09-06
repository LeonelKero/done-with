import { getAll } from "../doneWithApi"
import Author from "../model/Author"

const authorEndpoint = "/authors"

export const getAllAuthors = async () => {
    const authors = await getAll<Author>(authorEndpoint)
    // log data to the console
    console.log(authors.data.map(author => author.email))
    return authors
}