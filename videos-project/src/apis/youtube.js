import axios from 'axios'

const KEY = 'AIzaSyCul-GEs1MdaparHdC6KKG28bhcbIgaIFs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY 
    }
})
