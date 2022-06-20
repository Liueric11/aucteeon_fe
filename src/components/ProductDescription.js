import React from 'react';

const ProductDescription = () => {
  return (
    <div className="flex flex-col">
      <p className="font-bold text-xl">Jeans Spring</p>
      <div className="h-4" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="font-bold">Current Bid</p>
          <p className="font-bold">Rp 400.000</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Time Remaining</p>
          <p className="font-bold">01:20:30</p>
        </div>
      </div>
      <div className="h-px bg-slate-900 my-2" />
      <div className="flex flex-col">
        <p className="font-normal" style={{ color: '#5A5B6A' }}>
          Condition : <span style={{ color: '#333333' }}>NEW</span>
        </p>
        <p className="font-normal" style={{ color: '#5A5B6A' }}>
          Category :{' '}
          <span style={{ color: '#2F80ED' }} className="font-bold">
            Clothes
          </span>
        </p>
        <div className="h-4" />
        <p className="font-normal">
          Si osculantur puer tuus aut uxorem tuam, osculum, non dico quod omnia quae sunt hominis,
          et sic non tangetur, si aut ex eis moriatur.
          <br />
          <br />
          Quando ambulabat agendis admonere te qualis actio. Si ad corpus, quae plerumque Imaginare
          tecum in balineo quidam aquam fundes aliquod discrimen vituperiis usum alii furantur.
          <br />
          <br />
          Sic de isto et tutius perducit ad actum ipsum, ut si dico “Ego autem vadam lavari, ut mens
          mea in statu naturae conformior.” Et similiter circa alias res.
        </p>
      </div>
      <div className="h-px bg-slate-900 my-2" />
    </div>
  );
};

export default ProductDescription;
