// src/Me.tsx
import { useEffect, useState } from 'react';
import api from '../../api/index';

interface User {
  data: {
    email: string;
  };
}

export default function Success() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    api.get('/api/Auth/profile')
      .then(res => {
        console.log('User:', res.data);
        setUser(res.data);
      })
      .catch(err => {
        console.error('Not logged in:', err);
        setUser(null);
      });
  }, []);
  

  return (
    <div className='flex justify-center items-center h-screen'>
      {user?.data? (
        <p>Xin chào, {user.data.email}</p>
      ) : (
        <p>Chưa đăng nhập</p>
      )}
    </div>
  );
}
