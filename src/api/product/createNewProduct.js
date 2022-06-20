import axiosInstance from '../initAxios';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

async function createNewProduct(args) {
  const { body, history } = args;
  await axiosInstance
    .post('/v1/products', body)
    .then(() => {
      toast('Successfully added!');
      setTimeout(() => {
        history('/');
      }, 3000);
    })
    .catch((err) => {
      toast(err.response.data.message);
    });
}

export default createNewProduct;
