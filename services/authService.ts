
import { User } from '../types';

const ADMIN_CREDENTIALS = {
  email: 'admin@novexis.com',
  password: 'password123' // In a real app, this would be hashed and on a server.
};

export const login = (email: string, pass: string): User | null => {
  if (email === ADMIN_CREDENTIALS.email && pass === ADMIN_CREDENTIALS.password) {
    const user: User = { id: 'admin_1', email, role: 'admin' };
    localStorage.setItem('novexis_user', JSON.stringify(user));
    return user;
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem('novexis_user');
};

export const getCurrentUser = (): User | null => {
  const data = localStorage.getItem('novexis_user');
  return data ? JSON.parse(data) : null;
};
