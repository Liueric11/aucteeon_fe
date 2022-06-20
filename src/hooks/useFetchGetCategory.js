import { useState, useEffect } from 'react';
// import { getUser } from '../api';
import { useNavigate } from 'react-router-dom';
import getListCategory from 'src/api/product/getListCategory';

export default function useFetchGetCategory() {
  const [listCategory, setListCategory] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    let isApiSubscribed = true;
    if (listCategory.length === 0 && isApiSubscribed) {
      getListCategory((data, err) => {
        if (err) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          history('/login');
        }
        console.log('dataaaa', data);
        setListCategory([...data]);
      });
    }

    return () => {
      isApiSubscribed = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return { listCategory };
}
