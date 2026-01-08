import { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser, updateUser } from "../api/user.api";
import type { User } from "../types/user.types";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);


    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(null);
            setUsers(await getUsers());
        } catch (err: any) {
            setError(err?.response?.data?.message || "Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };

    const addUser = async (user: Omit<User, "_id">) => {
        try {
            setError(null);
            const newUser = await createUser(user);
            setUsers((prev) => [newUser, ...prev]);
        } catch (err: any) {
            setError(err?.response?.data?.message || "Failed to create user");
        }
    };

    const removeUser = async (id: string) => {
        try {
            setError(null);
            await deleteUser(id);
            setUsers((prev) => prev.filter((u) => u._id !== id));
        } catch (err: any) {
            setError(err?.response?.data?.message || "Failed to delete user");
        }
    };

    const editUser = async (id: string, user: Omit<User, "_id">) => {
        try {
            setError(null);
            const updated = await updateUser(id, user);
            setUsers((prev) =>
                prev.map((u) => (u._id === id ? updated : u))
            );
            setEditingUser(null);
        } catch (err: any) {
            setError(err?.response?.data?.message || "Failed to update user");
        }
    };


    useEffect(() => {
        fetchUsers();
    }, []);

    return {
        users, error, loading, addUser, removeUser, editUser,
        editingUser,
        setEditingUser,
    };
};
