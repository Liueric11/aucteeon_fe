import React from 'react';
// import product from '../assets/product.png';

const CardProduct = (props) => {
  console.log('propsssss', props);
  return (
    <div className="p-4 sm:w-60 bg-white rounded-3xl carousel-item border-2 border-slate-200 w-full h-96">
      <div className="flex-col w-full justify-center items-center flex">
        <div className="h-60">
          <img
            src={props.data.images}
            width={200}
            height={200}
            alt=""
            className="object-cover  h-48"
          />
        </div>
        <p className="my-3 text-xl font-bold">{props.data.name}</p>
        <hr className="my-2" />
        <div className="flex flex-row  w-full flex-wrap justify-between">
          <div className="flex-col mb-2">
            <p className="text-sm  font-semibold">Open Bid</p>
            <p className="text-sm md:text-base font-bold">Rp{props.data.initValue}</p>
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
