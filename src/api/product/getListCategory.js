import axiosInstance from '../initAxios';
import { toast } from 'react-toastify';

async function getListCategory(cb) {
  await axiosInstance
    .get('/v1/category?length=100')
    .then((res) => {
      cb(res.data.data.rows, null);
    })
    .catch((err) => {
      cb(null, err);
      toast(err.response.data.message);
    });
}

export default getListCategory;
