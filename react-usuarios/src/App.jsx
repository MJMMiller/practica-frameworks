import { useEffect, useState } from 'react';
import { getUsers } from './services/usersApi';
import { filterUsers } from './utils/filterUsers';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  if (loading) return <p>Cargando…</p>;
  if (error) return <p className="error">{error}</p>;

  const visibleUsers = filterUsers(users, search);

  return (
    <main className="app">
      <h1>Lista de usuarios</h1>
      <p>Favoritos: {favorites.length}</p>

      <input
        type="search"
        placeholder="Buscar por nombre"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <section className="tarjetas">
        {visibleUsers.map(user => (
          <UserCard
            key={user.id}
            user={user}
            isFavorite={favorites.includes(user.id)}
            onFavorite={toggleFavorite}
          />
        ))}
      </section>
    </main>
  );
}

export default App;