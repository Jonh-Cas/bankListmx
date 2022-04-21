import axios from "axios"

const listBanks: string = 'https://api.jsonbin.io/b/604006e581087a6a8b95b784'

const apiBack = axios.create({
    baseURL: listBanks
});


export default apiBack;