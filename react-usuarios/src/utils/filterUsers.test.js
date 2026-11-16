import { test, expect } from 'vitest';
import { filterUsers } from './filterUsers';

test('filtra usuarios por nombre sin importar mayúsculas', () => {
  const users = [
    { id: 1, name: 'Leanne Graham' },
    { id: 2, name: 'Ervin Howell' },
  ];

  const result = filterUsers(users, 'LEANNE');

  expect(result).toHaveLength(1);
  expect(result[0].name).toBe('Leanne Graham');
});