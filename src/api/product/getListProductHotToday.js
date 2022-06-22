import axiosInstance from '../initAxios';
import { toast } from 'react-toastify';

async function getListProductHotToday(cb) {
  await axiosInstance
    .get('/v1/products/hot-today')
    .then((res) => {
      cb(res.data.data.rows, null);
    })
    .catch((err) => {
      cb(null, err);
      toast(err.response.data.message);
    });
}

export default getListProductHotToday;
