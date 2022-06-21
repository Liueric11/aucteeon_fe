import React from 'react';
import ListProduct from 'src/components/ListProduct';
import Carousel from 'src/components/Carousel';
import Navbar from 'src/components/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <p className="text-2xl md:text-3xl font-bold m-2">Hot Today</p>
      <Carousel />

      <p className="text-2xl md:text-3xl font-bold m-2">Recommended</p>
      <ListProduct />
    </div>
  );
};

export default Homepage;
