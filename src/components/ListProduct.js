import React from 'react';
import CardProduct from 'src/components/CardProduct';

const ListProduct = () => {
  const data = [
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    }
  ];

  return (
    <div>
      <div className="flex flex-row flex-wrap bg-slate-100 sm:px-6 px-30 rounded-3xl justify-center">
        {data.map((data, index) => {
          return (
            index < 8 && (
              <div key={data} className="m-4">
                <CardProduct data={data} />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
