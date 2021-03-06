import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchOrderDetail from 'src/hooks/useFetchOrderDetail';
import * as moment from 'moment';
import { getOrderDetail, updateOrder } from 'src/api';
import { toast } from 'react-toastify';
import Navbar from 'src/components/Navbar';
import { Oval } from 'react-loader-spinner';

const TransactionDetailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { order, setOrder } = useFetchOrderDetail(id, setLoading);
  const history = useNavigate();
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    if (file.size > 1048576) {
      alert('File Terlalu besar');
    }
    setOrder({
      ...order,
      imageProof: base64,
      statusTemp: 'PAID'
    });
  };

  const deleteImage = () => {
    setOrder({
      ...order,
      imageProof: '',
      statusTemp: 'NOT_PAID'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = order;
    body.status = order.statusTemp;
    updateOrder({ body, id }, (data, err) => {
      if (err) {
        toast(err);
      } else {
        getOrderDetail(id, (order, err) => {
          if (err || data === null || data === 'null') {
            history('/');
          }
          toast('Update Order Success');
          setOrder({ ...order });
        });
      }
    });
  };

  return (
    <div className="flex justify-center">
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center h-[480px]">
          <Oval color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div className="border-solid border-2 border-slate-200 m-10 rounded-lg min-w-[400px] drop-shadow-sm md:w-3/4 w-11/12">
          <div className="mt-4 px-8">
            <p className="font-semibold text-3xl">Order Details</p>
          </div>
          <div className="flex flex-row flex-wrap md:items-start md:justify-start items-center justify-center md:ml-8 my-4 gap-8">
            <div className="rounded-lg md:w-60 md:h-60 w-48 h-48">
              <img
                className="object-cover rounded-2xl"
                src={order?.product?.images[0]}
                alt="xx product"
              />
            </div>
            <div className="flex flex-col flex-wrap md:w-2/3">
              <div className="mb-8">
                <span className="text-xl font-semibold">{order?.product?.name}</span>
              </div>
              <div className="flex flex-row items-center justify-between mb-4 gap-2">
                <span className="text-base font-medium">Invoice: </span>
                <span className="text-base font-medium">{order?.orderNumber}</span>
              </div>
              <div className="flex flex-row items-center justify-between mb-4 gap-2">
                <span className="text-base font-medium">Win Date: </span>
                <span className="text-base font-medium">
                  {order?.product?.dateEnd ? moment().format('DD MMMM YYYY') : ''}
                </span>
              </div>
              <div className="flex flex-row items-center justify-between mb-4 gap-2">
                <span className="text-base font-medium">Seller Name: </span>
                <span className="text-base font-medium">
                  {`${order?.product?.productOwner?.firstname} ${order?.product?.productOwner?.lastname}`}
                </span>
              </div>

              <div className="flex flex-row items-center justify-between mb-4 gap-2">
                <span className="text-base font-medium">Final Price: </span>
                <span className="text-base font-medium">
                  Rp {order?.priceBid?.toLocaleString().replace(/,/g, '.')}
                </span>
              </div>

              <div className="flex flex-row items-center justify-between mb-4 gap-2">
                <span className="text-base font-medium">Order Status: </span>
                <span
                  className={
                    'text-base font-bold ' +
                    (order?.status === 'NOT_PAID' ? 'text-red-700' : 'text-green-600')
                  }
                >
                  {order?.status}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-2">
            <span className="text-xl font-medium">Upload Payment Proof</span>
          </div>
          <div className=" flex flex-row flex-wrap w-full justify-center">
            <div className="border-dashed border-2 border-slate-400 rounded-2xl items-center justify-center flex flex-col md:px-16 px-6 py-8 m-4">
              <img className="w-96" src={order?.imageProof} alt="" />
              {!order?.imageProof?.length > 0 && (
                <input
                  type="file"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
              )}
              {order?.status === 'NOT_PAID' && (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-6"
                  onClick={() => {
                    deleteImage();
                  }}
                >
                  Hapus
                </button>
              )}
            </div>
          </div>
          {order?.status === 'NOT_PAID' && (
            <div className="mx-8 my-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded w-full"
                onClick={handleSubmit}
              >
                Submit Proof
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionDetailPage;
