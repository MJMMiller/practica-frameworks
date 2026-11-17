import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersApi {
  private http = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Promise<User[]> {
    return firstValueFrom(this.http.get<User[]>(this.url));
  }
}