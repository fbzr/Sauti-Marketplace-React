import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create9({
        header: {
            authorization: token
        },
        baseURL: 'http://africanmarketplace.ddns.net:5000/'
    })
}