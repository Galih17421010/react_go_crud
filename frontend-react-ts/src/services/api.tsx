import axios from "axios";

const Api = axios.create({
    // set defauult endpoin Api
    baseURL: 'http://localhost:3000'
})

export default Api