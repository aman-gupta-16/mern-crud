import type { User } from "../types/user.types";

interface Props {
  users: User[];
  onDelete: (id: string) => void;
  onEdit: (user: User) => void;
}

const UserList = ({ users, onDelete, onEdit }: Props) => {
  return (
    <ul className="user-list">
      {users.map((u) => (
        <li key={u._id} className="user-card">
          <div className="user-info">
            <span className="user-name">{u.name}</span>
            <span className="user-meta">{u.email} • {u.age} years old</span>
          </div>
          <div className="user-actions">
            <button 
                className="btn btn-sm btn-secondary" 
                onClick={() => onEdit(u)}
            >
                Edit
            </button>
            <button 
                className="btn btn-sm btn-danger" 
                onClick={() => onDelete(u._id)}
            >
                Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
