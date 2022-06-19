import React from 'react';

//TODO guvian color conditioning on item['status']

const TransactionPage = () => {
  const data = [
    {
      product_name: 'Buku Jadoel',
      win_date: '9 January 2022',
      status: 'Cancelled',
      seller_name: 'Guvian',
      invoice: 'INV/20210609/MPL/1307442403',
      total_price: 'Rp 100.000',
      image_url: 'https://s0.bukalapak.com/img/04310647562/s-330-330/data.jpeg.webp'
    },
    {
      product_name: 'Airpods Pro',
      win_date: '9 January 2022',
      status: 'Done',
      seller_name: 'Gunawan',
      invoice: 'INV/20210609/MPL/1307442404',
      total_price: 'Rp 3.100.000',
      image_url: 'https://macstore.id/konten/uploads/2019/11/MWP22.jpeg'
    },
    {
      product_name: 'Air Jordan 1 Panda',
      win_date: '9 January 2022',
      status: 'Done',
      seller_name: 'Excell',
      invoice: 'INV/20210609/MPL/1307442405',
      total_price: 'Rp 4.800.000',
      image_url:
        'https://sneakerbardetroit.com/wp-content/uploads/2019/04/Air-Jordan-1-Panda-WMNS-CD0461-007-Release-Date-4.jpg'
    }
  ];
  return (
    <div className="flex flex-col">
      <span className="flex md:pl-48 justify-center md:justify-start pt-4 font-semibold text-3xl">
        Transaction History
      </span>
      <div className="flex flex-col flex-wrap items-center justify-center">
        {data.map((item, Index) => {
          return (
            <div
              id="card"
              key={Index}
              className="w-3/4 border-2 border-slate-200 px-4 py-4 rounded-2xl my-4"
            >
              <div id="first_row" className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <span className="pr-5">{item['invoice']}</span>
                </div>
                <div className="bg-green-600 flex px-1 py-1 rounded w-20 justify-center">
                  <span className="text-white">{item['status']}</span>
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
                <span>{item['seller_name']}</span>
              </div>
              <div id="second_row" className="flex flex-row justify-between items-end py-1">
                <img
                  className="object-scale-down w-32 h-32 rounded-2xl"
                  src={item['image_url']}
                  alt="image product"
                />
                <div className="flex flex-col items-end">
                  <span className="text-xl font-bold">{item['product_name']}</span>
                  <span className="text-sm font-medium">{item['win_date']}</span>
                  <span className="text-lg font-medium">{item['total_price']}</span>
                  <div className="flex flex-wrap flex-row pt-5">
                    <div className="bg-white flex py-1 rounded w-48 border-2 items-center border-blue-600 justify-center">
                      <a href="#review" className="text-blue-600 text-sm">
                        See Transaction Detail
                      </a>
                    </div>
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
