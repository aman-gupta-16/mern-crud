import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useUsers } from "./hooks/useUsers";

function App() {
  const { users, error, loading, addUser, removeUser, editUser, editingUser, setEditingUser } = useUsers();

  return (
    <div className="app-container">
      <h2 className="app-title">User Management</h2>

      <UserForm 
        onAdd={addUser} 
        onEdit={editUser} 
        editingUser={editingUser} 
        onCancel={() => setEditingUser(null)}
      />

      {loading && <p className="loading-msg">Loading users...</p>}
      {error && <p className="error-msg">{error}</p>}

      <UserList users={users} onDelete={removeUser} onEdit={setEditingUser} />
    </div>
  );
}

export default App;
