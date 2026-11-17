import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersApi } from './services/users-api';
import { UserCard } from './components/user-card/user-card';
import { filterUsers } from './utils/filter-user';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  imports: [UserCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private api = inject(UsersApi);

  users = signal<User[]>([]);
  loading = signal(true);
  error = signal('');
  search = signal('');
  favorites = signal<number[]>([]);

  visibleUsers = computed(() => filterUsers(this.users(), this.search()));

  async ngOnInit() {
    try {
      this.users.set(await this.api.getUsers());
    } catch {
      this.error.set('Error al cargar los usuarios');
    } finally {
      this.loading.set(false);
    }
  }

  toggleFavorite(id: number) {
    this.favorites.update(favs =>
      favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]
    );
  }
}