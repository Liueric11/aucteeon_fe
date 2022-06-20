import axiosInstance from '../initAxios';
import { toast } from 'react-toastify';
async function updateUser(args, cb) {
  const { body } = args;
  await axiosInstance
    .put('/v1/user', body)
    .then((res) => {
      cb(res.data.data, null);
    })
    .catch((err) => {
      cb(null, err);
      toast(err.response.data.message);
    });
}

export default updateUser;
