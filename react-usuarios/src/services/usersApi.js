const API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function getUsers() {
  const respuesta = await fetch(API_URL);

  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al cargar los usuarios`);
  }

  return respuesta.json();
}