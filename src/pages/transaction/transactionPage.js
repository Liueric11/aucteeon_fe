import React, { useState } from 'react';
import useFetchHistory from 'src/hooks/useFetchHistory';
import moment from 'moment';
import Navbar from 'src/components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

const TransactionPage = () => {
  const [loading, setLoading] = useState(false);
  const { historyList } = useFetchHistory(setLoading);
  const history = useNavigate();

  const onClickCard = (item) => {
    if (item.status === 'WIN') {
      history(`/transaction-detail/${item?.orderId}`);
    } else {
      history(`/detail-product/${item?.productId}`);
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <span className="flex md:pl-48 justify-center md:justify-start pt-4 font-semibold text-3xl">
        Transaction History
      </span>
      {loading ? (
        <div className="flex justify-center items-center h-[480px]">
          <Oval color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div className="flex flex-col flex-wrap items-center justify-center">
          {historyList.rows &&
            historyList.rows.map((item, Index) => {
              return (
                <div
                  id="card"
                  key={Index}
                  className="w-3/4 border-2 border-slate-200 px-4 py-4 rounded-2xl my-4"
                >
                  <div
                    id="first_row"
                    className="flex flex-row sm:flex-row justify-between items-center flex-wrap"
                  >
                    <div className="flex flex-row items-center">
                      <span className="sm:pr-5 sm:text-base text-sm text-slate-400">
                        {item?.orderNumber}
                      </span>
                    </div>

                    {item.status === 'WIN' ? (
                      <div className="bg-green-600 flex px-1 py-1 rounded sm:w-20 w-auto justify-center">
                        <span className="text-white sm:text-base text-sm">{item?.status}</span>
                      </div>
                    ) : (
                      <div className="bg-red-600 flex px-1 py-1 rounded sm:w-20 w-auto justify-center">
                        <span className="text-white sm:text-base text-sm">{item?.status}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row items-center py-1">
                    <div className="sm:px-1 pr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="sm:text-lg font-bold text-sm">
                      {`${item?.product?.productOwner?.firstname} ${item?.product?.productOwner?.lastname}`}
                    </span>
                  </div>
                  <div
                    id="second_row"
                    className="flex sm:flex-row flex-col justify-between sm:items-end items-center py-1"
                  >
                    <img
                      className="object-scale-down w-32 h-32 rounded-2xl"
                      src={item?.product?.images[0] || ''}
                      alt="product"
                    />
                    <div className="flex flex-col sm:items-end flex-wrap">
                      <span className="text-xl font-bold">{item.product.name}</span>
                      <span className="text-sm font-medium text-slate-400">
                        {moment(item?.product?.dateEnd).format('DD MMM YYYY')}
                      </span>
                      <span className="text-lg font-medium">{`Rp ${item?.priceBidLatest
                        .toLocaleString()
                        .replace(/,/g, '.')}`}</span>
                      <div className="flex flex-wrap flex-row pt-5">
                        {item?.status !== 'LOSE' && (
                          <button
                            className="bg-white flex py-1 rounded w-48 border-2 items-center border-blue-600 justify-center"
                            onClick={() => onClickCard(item)}
                          >
                            <p className="text-blue-600 text-sm">
                              {item.status === 'WIN'
                                ? 'See Transaction Detail'
                                : 'See Detail Product'}
                            </p>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default TransactionPage;
