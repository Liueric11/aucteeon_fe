import axiosInstance from '../initAxios';
import { toast } from 'react-toastify';

async function getListProduct(cb) {
  await axiosInstance
    .get('/v1/products?length=100')
    .then((res) => {
      cb(res.data.data.rows, null);
    })
    .catch((err) => {
      cb(null, err);
      toast(err.response.data.message);
    });
}

export default getListProduct;
