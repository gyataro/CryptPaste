import axios from 'axios'

const { env } = process;
const BASE_URL = `${env.API_URL}/paste`

const createPaste = (paste) => {
    const request = axios.post(BASE_URL, paste)
    return request.then(response => response.headers)
}

const readPaste = (id, burn="", secret="") => {
    let config = {}

    console.log(secret)

    if(burn || secret) {
        config = {
            headers: { Burn: burn, Secret: secret }
        }
    }

    const request = axios.get(`${BASE_URL}/${id}`, config)
    return request.then(response => response.data)
}

export default {
    createPaste,
    readPaste
}