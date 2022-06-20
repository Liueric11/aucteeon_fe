import axiosInstance from '../initAxios';
import { toast } from 'react-toastify';

async function getListProduct(cb) {
  await axiosInstance
    .get('/v1/products')
    .then((res) => {
      //   console.log('dataaa', res);
      cb(res.data.data.rows, null);
    })
    .catch((err) => {
      cb(null, err);
      toast(err.response.data.message);
    });
}

export default getListProduct;
