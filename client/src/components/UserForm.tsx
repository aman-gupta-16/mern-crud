import { useState, useEffect } from "react";
import type { UserFormProps } from "../types/user.types";

const UserForm = ({ onAdd, onEdit, editingUser, onCancel }: UserFormProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (editingUser) {
            setName(editingUser.name);
            setEmail(editingUser.email);
            setAge(editingUser.age.toString());
        } else {
            setName("");
            setEmail("");
            setAge("");
        }
    }, [editingUser]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        setError("");

        if (!name || !email || !age) {
            setError("All fields required");
            return;
        }
        if (!email.includes("@")) {
            setError("Invalid email");
            return;
        }
        if (Number(age) < 1) {
            setError("Age must be greater than 1");
            return;
        }

        const userPayload = { name, email, age: Number(age) };

        if (editingUser && onEdit) {
            onEdit(editingUser._id, userPayload);
        } else {
            onAdd(userPayload);
        }

        if (!editingUser) {
            setName("");
            setEmail("");
            setAge("");
        }
    };

    return (
        <form onSubmit={submit} className="user-form">
            <input 
                className="form-input"
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                className="form-input"
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                className="form-input"
                placeholder="Age" 
                type="number" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
            />
            
            <div className="form-actions">
                <button className="btn btn-primary" type="submit">
                    {editingUser ? "Update User" : "Add User"}
                </button>
                {editingUser && (
                    <button 
                        type="button" 
                        className="btn btn-secondary"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                )}
            </div>
            {error && <p className="error-msg">{error}</p>}
        </form>
    );
};

export default UserForm;
