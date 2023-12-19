import axios from "axios";

export const QueryFormData = axios.create({
    baseURL: 'https://dummyjson.com/posts'
})