import axios from "axios";
import {userId} from "../config"
import {baseUrl} from "../config"

const instance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

export const usersAPI = {
    getUser(id) {
        return instance.get(`/users/${id}`).then((response) => {
            return response.data;
        })},
    updateUser(id, user) {

        return instance.put(`/users/${id}`, user).then((response) => {
            return response.data;
        })}
}