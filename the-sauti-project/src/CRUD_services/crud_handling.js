import config from "config";
import { auth_Header } from "../utils";

export const handleCRUD = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({ username, password })
    };

    return fetch().then(handleResponse).then(user => {
        localStorage.setItem("user", JSON.stringify(user))
    })
}

function logout() {
    localStorage.removeItem("user")
}

function getAll(){
    const requestOptions = {
        method: "GET",
        haerders: auth_Header()
    };

    return fetch().then(handleResponse)
}

function getById(id) {
    const requestOptions = {
        method: "GET",
        headers: auth_Header()
    };
    return fetch().then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(user)
    };
    return fetch().then(handleResponse)
}

function update(user) {
    const requestOptions = {
        method: "PUT",
        headers: { ...auth_Header(), "Content-Type": "application/json" },
        body: JSON.stringify(user)
    }
    return fetch().then(handleResponse);
}

function _delete(id){
    const requestOptions ={
        method: "DELETE",
        headers: auth_Header()
    };
    return fetch().then(handleResponse)
}

function handleResponse(response){
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if(!response.ok){
            if(response.status === 401) {
                logout();
                location.reload(true)
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data
    });
}