import axiosInstance from '../initAxios';
import { toast } from 'react-toastify';

async function updateOrder(args, cb) {
  const { body, id } = args;
  await axiosInstance
    .put(`/v1/order/${id}`, body)
    .then((res) => {
      cb(res.data.data, null);
    })
    .catch((err) => {
      cb(null, err);
      toast(err.response.data.message);
    });
}

export default updateOrder;
