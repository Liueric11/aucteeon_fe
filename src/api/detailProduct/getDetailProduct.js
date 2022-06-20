import axiosInstance from '../initAxios';
import { toast } from 'react-toastify';
async function getDetailProduct(args) {
  const { id } = args;
  const res = await axiosInstance
    .get('/v1/products/' + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      toast(err.response.data.message);
    });
  return res.data;
}

export default getDetailProduct;
