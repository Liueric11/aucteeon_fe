import { useState, useEffect } from 'react';
import { getUser } from '../api';
import { useNavigate } from 'react-router-dom';

export default function useFetchGetUser() {
  const [user, setUser] = useState({});
  const history = useNavigate();
  useEffect(() => {
    let isApiSubscribed = true;
    if (Object.keys(setUser) && isApiSubscribed) {
      getUser((user, err) => {
        if (err) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          history('/login');
        }
        setUser({ ...user });
      });
    }

    return () => {
      isApiSubscribed = false;
    };
  }, [history]);

  return { user, setUser };
}
