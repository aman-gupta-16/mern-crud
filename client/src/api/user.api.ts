import axios from "axios";
import type { User } from "../types/user.types";
import { BASE_URL } from "../utils/baseUrl";

const API_URL = `${BASE_URL}/users`;

export const getUsers = async (): Promise<User[]> => {
    const res = await axios.get(API_URL);
    return res.data.data;
};

export const createUser = async (
    user: Omit<User, "_id">
): Promise<User> => {
    const res = await axios.post(API_URL, user);
    return res.data.data;
};

export const deleteUser = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateUser = async (
    id: string,
    user: Omit<User, "_id">
): Promise<User> => {
    const res = await axios.put(`${API_URL}/${id}`, user);
    return res.data.data;
};
