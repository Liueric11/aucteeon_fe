import { useState, useEffect } from 'react';
import { getOrderDetail } from '../api';
import { useNavigate } from 'react-router-dom';

export default function useFetchOrderDetail(id = 1) {
  const [order, setOrder] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    let isApiSubscribed = true;
    if (Object.keys(order) && isApiSubscribed) {
      getOrderDetail(id, (data, err) => {
        if (err || data === null || data === 'null') {
          // kalo null ke sini
          history('/');
        }
        setOrder({ ...data });
      });
    }

    return () => {
      isApiSubscribed = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return { order, setOrder };
}
