import React from 'react';
import product from '../assets/product.png';

const CardProduct = (props) => {
  return (
    <div className="p-4 w-50 mx-3 lg:w-60 bg-white rounded-3xl carousel-item ">
      <div className="flex-col w-full">
        <div>
          <img src={product} alt="" />
        </div>
        <p className="my-3 text-xl font-bold">{props.data.title}</p>
        <hr className="my-2" />
        <div className="flex flex-col  w-full flex-wrap">
          <div className="flex-row mb-2">
            <p className="text-sm  font-semibold">Open Bid</p>
            <p className="text-sm md:text-base font-bold">{props.data.openBid}</p>
          </div>
          <div className="flex-row">
            <p className="text-sm  font-semibold">Time Remaining</p>
            <p className="text-sm md:text-base  font-bold">{props.data.timeRemaining}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
