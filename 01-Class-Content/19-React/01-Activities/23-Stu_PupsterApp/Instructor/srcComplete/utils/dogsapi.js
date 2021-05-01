// make sure to add this module first before import
import axios from 'axios';

const api = {
    // https://dog.ceo/api/breed/hound/images
    // https://dog.ceo/api/breed/${breed}/images

    // getByBreed: breed => {
    //     return axios.get(`https://dog.ceo/api/breed/${breed}/images`);
    // },

    // when you don't have a curly brace on an ES6 function, it will return the right handside evaluation
    getByBreed: breed => axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    // add1(){
    //     return 1+1;
    // },
    // add12: () => {
    //     return 1+2;
    // }
};

export default api;