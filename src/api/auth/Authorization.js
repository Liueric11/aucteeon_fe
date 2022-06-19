import axiosInstance from '../initAxios';
import { toast } from 'react-toastify';

async function Authorization(args) {
  const { body, history } = args;
  await axiosInstance
    .post('/v1/login', body)
    .then((result) => {
      if (result.status === 200) {
        localStorage.setItem('user', JSON.stringify(result.data.data.user));
        localStorage.setItem('token', result.data.data.token);
        history('/');
      }
    })
    .catch((err) => {
      toast(err.response.data.message);
    });
}

export default Authorization;
