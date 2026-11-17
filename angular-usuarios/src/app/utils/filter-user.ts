import { User } from '../models/user.model';

export function filterUsers(users: User[], text: string): User[] {
  return users.filter(user =>
    user.name.toLowerCase().includes(text.toLowerCase())
  );
}