import { useState, useEffect } from 'react';
// import { getUser } from '../api';
import { useNavigate } from 'react-router-dom';
import getListProductHotToday from 'src/api/product/getListProductHotToday';

export default function useFetchGetProductHotToday() {
  const [listProduct, setListProduct] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    let isApiSubscribed = true;
    if (listProduct.length === 0 && isApiSubscribed) {
      getListProductHotToday((data, err) => {
        if (err) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          history('/login');
        }
        setListProduct([...data]);
      });
    }

    return () => {
      isApiSubscribed = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return { listProduct };
}
