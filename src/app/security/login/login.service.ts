import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MEAT_API} from '../../app.api';
import {User} from './user.model';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {
  user: User;
  isLoogedIn(): boolean {
    return this.user !== undefined
  }
  constructor (private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`,
      {email: email, password: password})
      .do(user => this.user = user);
  }

  handleLogin(path?: string) {
    this.router.navigate(['/login', btoa(path)])
  }

}
