import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://apeocvida.com.br/painel/wp-json/wp/v2/'
});
