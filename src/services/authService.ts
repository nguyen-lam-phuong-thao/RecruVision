// src/services/authService.ts
import api from '../api';

export const login = async (email: string, password: string) => {
  const response = await api.post('/api/Auth/login', { email, password });
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/api/Auth/logout');
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/api/Auth/profile');
  return response.data;
};

export const changePassword = async (currentPassword: string, newPassword: string) => {
  const response = await api.post('/api/Auth/change-password', { currentPassword, newPassword });
  return response.data;
};

interface RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const register = async (registerDto: RegisterDto) => {
  const response = await api.post('/api/Auth/register', registerDto);
  return response.data;
};

export const getCookie = async () => {
  const response = await api.get('/api/Auth/cookie-info');
  return response.data;
};

// Có thể export dạng object nếu muốn
export default {
  login,
  logout,
  getProfile,
  register,
  changePassword,
  getCookie
};
