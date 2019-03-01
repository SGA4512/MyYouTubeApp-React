import axios from 'axios';

const KEY = 'AIzaSyBfpAVnDNyDSiqjZqu6CNf4nIboJdhe7kc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResulat: 10,
        key: KEY
    }
}) 