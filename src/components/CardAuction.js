import React, { useState } from 'react';
import TempProfile from '../assets/profile.png';

const CardAuction = ({ onSubmitBid, openBid, listBidding }) => {
  const [nominal, setNominal] = useState(null);
  const multiplication = [
    {
      id: 1,
      nominal: 10000
    },
    {
      id: 2,
      nominal: 25000
    },
    {
      id: 3,
      nominal: 50000
    },
    {
      id: 4,
      nominal: 100000
    },
    {
      id: 5,
      nominal: 200000
    }
  ];

  return (
    <div className="flex flex-col items-start justify-center border-2 border-slate-200 rounded-2xl px-2 py-4">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col">
          <p className="">Open Bid : {`Rp ${openBid.toLocaleString().replace(/,/g, '.')}`}</p>
        </div>
      </div>
      <div className="h-2" />
      <div className="flex flex-col max-h-[300px] min-h-[300px] w-full border-2 border-slate-200 rounded-2xl px-1 py-2 overflow-y-auto">
        {listBidding.map((item, index) => {
          return (
            <div className="flex flex-row justify-between items-center my-1" key={index}>
              <div className="flex flex-row items-center">
                <p className="w-6">{index + 1}.</p>
                <div className="w-2" />
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={item.user_detail.avatar ? item.user_detail.avatar : TempProfile}
                  alt="profile"
                />
                <div className="w-2" />
                <p>
                  {item.user_detail.firstname} {item.user_detail.lastname}
                </p>
              </div>
              <p>{`Rp ${item.bidValue.toLocaleString().replace(/,/g, '.')}`}</p>
            </div>
          );
        })}
      </div>
      <div className="h-2" />
      <p className="text-left">Multiplication</p>
      <div className="h-2" />
      <div className="flex flex-row flex-wrap">
        {multiplication.map((item, index) => {
          const selected = nominal ? (nominal.id === item.id ? true : false) : false;

          return (
            <button
              onClick={() => setNominal(item)}
              key={index}
              className={
                'text-white font-bold py-2 px-1 rounded mr-2 mb-2 ' +
                (selected ? 'bg-indigo-700' : 'bg-blue-300')
              }
            >
              {`Rp ${item.nominal.toLocaleString().replace(/,/g, '.')}`}
            </button>
          );
        })}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
        onClick={() => {
          setNominal(null);
          onSubmitBid(nominal.nominal);
        }}
      >
        Bid Now
      </button>
    </div>
  );
};

export default CardAuction;
