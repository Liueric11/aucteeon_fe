import axiosInstance from '../initAxios';
import { toast } from 'react-toastify';
async function createNewUser(args) {
  const { body, history } = args;
  await axiosInstance
    .post('/v1/signup', body)
    .then(() => {
      toast('Successfully registered!');
      setTimeout(() => {
        history('/login');
      }, 3000);
    })
    .catch((err) => {
      toast(err.response.data.message);
    });
}

export default createNewUser;
