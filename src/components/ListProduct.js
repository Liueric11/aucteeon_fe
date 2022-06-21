import React from 'react';
import CardProduct from 'src/components/CardProduct';
import useFetchGetProduct from 'src/hooks/useFetchGetProduct';

const ListProduct = () => {
  const { listProduct } = useFetchGetProduct();
  console.log('proddddd', listProduct);

  return (
    <div>
      <div className="flex flex-row flex-wrap bg-slate-100 sm:px-6 px-30 rounded-3xl justify-center mb-20">
        {listProduct.map((data, index) => {
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
