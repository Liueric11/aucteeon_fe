import React from 'react';
import product from '../assets/product.png';

const CardProduct = (props) => {
  return (
    <div className="p-4 sm:w-52 lg:w-44 bg-white rounded-3xl carousel-item border-2 border-slate-200 w-full">
      <div className="flex-col w-full">
        <div>
          <img src={product} alt="" />
        </div>
        <p className="my-3 text-xl font-bold">{props.data.title}</p>
        <hr className="my-2" />
        <div className="flex flex-row  w-full flex-wrap justify-between">
          <div className="flex-col mb-2">
            <p className="text-sm  font-semibold">Open Bid</p>
            <p className="text-sm md:text-base font-bold">Rp{props.data.openBid}</p>
          </div>
          <div className="flex-col">
            <p className="text-sm  font-semibold">Time Remaining</p>
            <p className="text-sm md:text-base font-bold text-red-700">
              {props.data.timeRemaining}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
