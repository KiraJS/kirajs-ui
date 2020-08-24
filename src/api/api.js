import axios from 'axios';
import {baseUrl} from '../config'

const instance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

export const usersAPI = {
    async getUser(id) {
        let response = await instance.get(`/users/${id}`);
        return response.data;
    },
    async updateUser(id, user) {
        let response = await instance.put(`/users/${id}`, user);
        return response.data;
    }
}