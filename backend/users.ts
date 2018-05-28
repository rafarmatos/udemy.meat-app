export class User {
  constructor (public email: string,
               public name: string,
               private password: string) {}
  matches(another: User): boolean {
    return another !== undefined &&
      another.email === this.email &&
      another.password === this.password
  }
}

export const users: {[key: string]: User} = {
  'rafael@gmail.com' : new User ('rafael@gmail.com', 'Rafael', '123'),
  'lucas@gmail.com' : new User ('lucas@gmail.com', 'Lucas', '123')
}
