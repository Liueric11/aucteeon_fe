import React from 'react';
import CardAuction from 'src/components/CardAuction';
// import ListProduct from 'src/components/ListProduct';
// import Carousel from 'src/components/Carousel';

const detailPage = () => {
  console.log('testtt');
  return (
    <div>
      <p className="text-2xl md:text-3xl font-bold m-2">Hot Today</p>
      <CardAuction />
    </div>
  );
};

export default detailPage;
