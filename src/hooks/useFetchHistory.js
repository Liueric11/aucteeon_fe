import { useState, useEffect } from 'react';
import { getHistoryList } from '../api';
import { useNavigate } from 'react-router-dom';

export default function useFetchHistory() {
  const [historyList, setHistory] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    let isApiSubscribed = true;
    if (historyList.length === 0 && isApiSubscribed) {
      getHistoryList((data, err) => {
        if (err) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          history('/login');
        }
        setHistory({ ...data });
      });
    }

    return () => {
      isApiSubscribed = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return { historyList, setHistory };
}
