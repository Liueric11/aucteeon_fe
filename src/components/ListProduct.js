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
    }
  ];

  return (
    <div>
      <div className=" flex flex-row flex-wrap justify-center ">
        {data.map((data) => {
          return (
            <div key={data} className="m-4">
              <CardProduct data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
