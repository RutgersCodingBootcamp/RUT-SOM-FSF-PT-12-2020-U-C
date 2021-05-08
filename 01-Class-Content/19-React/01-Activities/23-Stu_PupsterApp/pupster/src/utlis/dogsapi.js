import axios from 'axios';

const api = {
    // https://dog.ceo/api/breed/${breed}/images

    getByBreed: breed => {
        return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    }
}

export default api;