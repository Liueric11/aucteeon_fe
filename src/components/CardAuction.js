import React from 'react';

const CardAuction = () => {
  const data = [
    {
      id: 1,
      nama: 'Ricardo Milos',
      bid: 400000
    },
    {
      id: 2,
      nama: 'Ricardo Milos',
      bid: 400000
    },
    {
      id: 3,
      nama: 'Ricardo Milos',
      bid: 400000
    },
    {
      id: 4,
      nama: 'Ricardo Milos',
      bid: 400000
    },
    {
      id: 5,
      nama: 'Ricardo Milos',
      bid: 400000
    },
    {
      id: 6,
      nama: 'Ricardo Milos',
      bid: 400000
    },
    {
      id: 7,
      nama: 'Ricardo Milos',
      bid: 400000
    },
    {
      id: 8,
      nama: 'Ricardo Milos',
      bid: 400000
    },
    {
      id: 9,
      nama: 'Ricardo Milos',
      bid: 400000
    },
    {
      id: 10,
      nama: 'Ricardo Milos',
      bid: 400000
    },
    {
      id: 11,
      nama: 'Ricardo Milos',
      bid: 400000
    },
    {
      id: 12,
      nama: 'Ricardo Milos',
      bid: 400000
    }
  ];

  const multiplication = [
    {
      id: 1,
      nominal: 1000
    },
    {
      id: 2,
      nominal: 10000
    },
    {
      id: 3,
      nominal: 100000
    },
    {
      id: 4,
      nominal: 2500000
    },
    {
      id: 5,
      nominal: 5000000
    }
  ];

  return (
    <div className="flex flex-col items-start justify-center border-2 border-slate-200 rounded-2xl px-2 py-4">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col">
          <p className="">Open Bid : Rp 50.000</p>
        </div>
      </div>
      <div className="h-2" />
      <div className="flex flex-col max-h-[300px] min-h-[300px] w-full border-2 border-slate-200 rounded-2xl px-1 py-2 overflow-y-auto">
        {data.map((item, index) => {
          return (
            <div className="flex flex-row justify-between items-center my-1" key={index}>
              <div className="flex flex-row items-center">
                <p className="w-6">{item.id}.</p>
                <div className="w-2" />
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTzpIkP8cTKBO1hib2MzkYsti5tMj1cFWng&usqp=CAU"
                  alt="profile"
                />
                <div className="w-2" />
                <p>Ricardo Milos</p>
              </div>
              <p>{`Rp ${item.bid.toLocaleString().replace(/,/g, '.')}`}</p>
            </div>
          );
        })}
      </div>
      <div className="h-2" />
      <p className="text-left">Multiplication</p>
      <div className="h-2" />
      <div className="flex flex-row flex-wrap">
        {multiplication.map((item, index) => {
          return (
            <button
              key={index}
              className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-1 rounded mr-2 mb-2"
            >
              {`Rp ${item.nominal.toLocaleString().replace(/,/g, '.')}`}
            </button>
          );
        })}
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
        Bid Now
      </button>
    </div>
  );
};

export default CardAuction;
