import axiosInstance from '../initAxios';
import { toast } from 'react-toastify';

async function GetUser(cb) {
  await axiosInstance
    .get('/v1/user')
    .then((res) => {
      cb(res.data.data, null);
    })
    .catch((err) => {
      cb(null, err);
      toast(err.response.data.message);
    });
}

export default GetUser;
