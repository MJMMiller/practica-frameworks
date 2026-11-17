import { filterUsers } from '../utils/filter-user';
import { User } from '../models/user.model';

describe('filterUsers', () => {
  it('filtra usuarios por nombre sin importar mayúsculas', () => {
    const users = [
      { id: 1, name: 'Leanne Graham' },
      { id: 2, name: 'Ervin Howell' },
    ] as User[];

    const result = filterUsers(users, 'LEANNE');

    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Leanne Graham');
  });
});