export function filterUsers(users, text) {
  return users.filter(user =>
    user.name.toLowerCase().includes(text.toLowerCase())
  );
}