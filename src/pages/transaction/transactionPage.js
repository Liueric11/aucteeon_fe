import React from 'react';
import useFetchHistory from 'src/hooks/useFetchHistory';
import moment from 'moment';
//TODO guvian color conditioning on item['status']

const TransactionPage = () => {
  const { historyList, setHistory } = useFetchHistory();
  console.log(historyList);
  return (
    <div className="flex flex-col">
      <span className="flex md:pl-48 justify-center md:justify-start pt-4 font-semibold text-3xl">
        Transaction History
      </span>
      <div className="flex flex-col flex-wrap items-center justify-center">
        {historyList.rows &&
          historyList.rows.map((item, Index) => {
            return (
              <div
                id="card"
                key={Index}
                className="w-3/4 border-2 border-slate-200 px-4 py-4 rounded-2xl my-4"
              >
                <div id="first_row" className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center">
                    <span className="pr-5">INV/20210609/MPL/1307442405</span>
                  </div>
                  <div className="bg-green-600 flex px-1 py-1 rounded w-20 justify-center">
                    <span className="text-white">{item.status}</span>
                  </div>
                </div>
                <div className="flex flex-row items-center py-1">
                  <div className="px-1">
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
                  <span>{item.product.productOwner.firstname}</span>
                </div>
                <div id="second_row" className="flex flex-row justify-between items-end py-1">
                  <img
                    className="object-scale-down w-32 h-32 rounded-2xl"
                    src={item.product.images[0]}
                    alt="product"
                  />
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-bold">{item.product.name}</span>
                    <span className="text-sm font-medium">
                      {moment(item.product.dateEnd).format('DD MMM YYYY')}
                    </span>
                    <span className="text-lg font-medium">Rp 4.800.000</span>
                    <div className="flex flex-wrap flex-row pt-5">
                      <button className="bg-white flex py-1 rounded w-48 border-2 items-center border-blue-600 justify-center">
                        <p className="text-blue-600 text-sm">See Transaction Detail</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TransactionPage;
