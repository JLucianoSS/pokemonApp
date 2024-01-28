

import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const pokemonApi = axios.create({
    baseURL: `${apiUrl}`
})