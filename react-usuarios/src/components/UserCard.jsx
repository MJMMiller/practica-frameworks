function UserCard({ user, isFavorite, onFavorite }) {
  return (
    <article className="tarjeta">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <p>{user.company.name}</p>
      <button onClick={() => onFavorite(user.id)}>
        {isFavorite ? '★ Favorito' : '☆ Favorito'}
      </button>
    </article>
  );
}

export default UserCard;