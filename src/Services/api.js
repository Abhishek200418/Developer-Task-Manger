import axios from "axios";

const API_URL_Tasks = "http://localhost:8082/tasks";
const API_URL_Notes = "http://localhost:8082/notes";

export const getAllTask = () => {
    return axios.get(API_URL_Tasks);
};

export const addTask = (task) => {
    return axios.post(API_URL_Tasks, task);
};

export const updateTask = (id, task) => {
    return axios.put(`${API_URL_Tasks}/${id}`, task);
};

export const deleteTask = (id) => {
    return axios.delete(`${API_URL_Tasks}/${id}`);
};

export const addNotes = (note) => {
    return axios.post(API_URL_Notes, note);
};

export const getAllNotes = () => {
    return axios.get(API_URL_Notes);
};

export const deleteNote = (id) => {
    return axios.delete(`${API_URL_Notes}/${id}`);
};