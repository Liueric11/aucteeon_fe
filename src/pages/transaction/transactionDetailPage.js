import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TransactionDetailPage = () => {
  const { itemDetail, setItemDetail } = useState();
  const { paymentProof, setPaymentProf } = useState();
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
    setPaymentProf(base64);
  };

  const deleteImage = () => {
    setPaymentProf('');
  };

  return (
    <div className="flex justify-center">
      <div className="border-solid border-2 border-slate-200 m-10 rounded-lg min-w-[400px] drop-shadow-sm md:w-3/4 w-11/12">
        <div className="mt-4 px-8">
          <p className="font-semibold text-3xl">Order Details</p>
        </div>
        <div className="flex flex-row flex-wrap md:items-start md:justify-start items-center justify-center md:ml-8 my-4 gap-8">
          <div className="border-solid border-2 border-slate-200 rounded-lg md:w-64 md:h-64 w-48 h-48">
            <img
              className="object-scale-down rounded-2xl"
              src={'https://macstore.id/konten/uploads/2019/11/MWP22.jpeg'}
              alt="image product"
            />
          </div>
          <div className="flex flex-col flex-wrap md:w-2/3">
            <div className="mb-8">
              <span className="text-xl font-semibold">Airpods Pro</span>
            </div>
            <div className="flex flex-row items-center justify-between mb-4 gap-2">
              <span className="text-base font-medium">Win Date: </span>
              <span className="text-base font-medium">9 January 2022</span>
            </div>
            <div className="flex flex-row items-center justify-between mb-4 gap-2">
              <span className="text-base font-medium">Seller Name: </span>
              <span className="text-base font-medium">Gunawan</span>
            </div>
            <div className="flex flex-row items-center justify-between mb-4 gap-2">
              <span className="text-base font-medium">Invoice: </span>
              <span className="text-base font-medium">INV/20210609/MPL/1307442403</span>
            </div>
            <div className="flex flex-row items-center justify-between mb-4 gap-2">
              <span className="text-base font-medium">Final Price: </span>
              <span className="text-base font-medium">Rp 3.100.000</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-2">
          <span className="text-xl font-medium">Upload Payment Proof</span>
        </div>
        <div className=" flex flex-row flex-wrap w-full justify-center">
          <div className="border-dashed border-2 border-slate-400 rounded-2xl items-center justify-center flex flex-col md:px-16 px-6 py-8 m-4">
            <img className="w-96" src={paymentProof} alt="" />
            {!paymentProof ? (
              <input
                type="file"
                onChange={(e) => {
                  uploadImage(e);
                }}
              />
            ) : (
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
        <div className="mx-8 my-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded w-full"
            onClick=""
          >
            Submit Proof
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailPage;
