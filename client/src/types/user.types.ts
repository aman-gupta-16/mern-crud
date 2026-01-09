export interface User {
  _id: string;
  name: string;
  email: string;
  age: number;
}

export type UserBase = Omit<User, "_id">;

export interface UserListProps {
  users: User[];
  onDelete: (id: string) => void;
  onEdit: (user: User) => void;
}

export interface UserFormProps {
    onAdd: (user: UserBase) => void;
    onEdit?: (id: string, user: UserBase) => void;
    editingUser?: User | null;
    onCancel?: () => void;
}