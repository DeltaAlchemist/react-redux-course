import axios from 'axios';

// Creating an instance of the axios client with some defaulted properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Eeap78ocpqeSKE74cLPdxAy0Hvn1n0zt5uSdAYLTWwQ',
    }
})

