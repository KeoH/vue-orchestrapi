class User {
  public username: string;
  public id: number;

  constructor(username: string) {
    this.username = username;
    this.id = 1;
  }
}

export default {
  authenticated: false,
  isAuthenticated(): boolean {
    return this.authenticated;
  },
  authenticate(username: string, password: string): User | null {
    if (username === 'keoh' && password === 'pass') {
      this.authenticated = true;
      return new User(username);
    } else {
      this.authenticated = false;
      return null;
    }
  },
};
