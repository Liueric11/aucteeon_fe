import React from 'react';
import CardAuction from 'src/components/CardAuction';
import ProductDescription from 'src/components/ProductDescription';

const DetailPage = () => {
  return (
    <div className="grid grid-cols-1 gap-x-[36px] py-8 lg:grid-cols-10 px-4">
      <div className="col-span-1  lg:col-span-3 sm:mx-auto">
        <img
          className="rounded-md w-1/2 lg:w-full mx-auto"
          src="https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/14/9f65a48f-775f-4498-a429-d4b587ed332f.jpg"
          alt="celana euy"
        />
        <div className="h-2" />
        <div className="flex flex-row items-center">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTzpIkP8cTKBO1hib2MzkYsti5tMj1cFWng&usqp=CAU"
            alt="profile"
          />
          <div className="w-3" />
          <p className="font-bold">Anton Medan</p>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-4 sm:mx-auto">
        <div className="flex justify-center">
          <ProductDescription />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-3">
        <div className="flex justify-center">
          <CardAuction />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
