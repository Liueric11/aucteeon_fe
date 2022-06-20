import React from 'react';
import TempProfile from '../../assets/image 26.png';

const User = () => {
  return (
    <div className="flex justify-center">
      <div className="border-solid border-2 border-slate-200 m-10 rounded-lg min-w-[400px] drop-shadow-sm max-w-[700px]">
        <div className="border-solid border-b-2 border-slate-200 mt-2 pl-2 px-8">
          <p>Biodata</p>
        </div>
        <div className="flex justify-between md:flex-row flex-col px-8">
          <div className="flex justify-center">
            <div className="flex border-solid border-2 border-slate-200 mt-10 mr-3 rounded-b-lg w-fit md:mb-10">
              <div>
                <div className="w-52 h-52 m-3">
                  <img src={TempProfile} alt="img-profile" />
                </div>
                <div className="flex justify-center m-3">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full my-6"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-100 h-100 border-solid  mt-10 ml-10 mb-10">
            <div>
              <p className="font-bold">Edit Biodata</p>
              <p className="text-gray-400">
                Name <span className="ml-10">Anton</span>
              </p>
              <p className="text-gray-400">
                Name <span className="ml-10">20 february 2021</span>
              </p>
              <p className="text-gray-400">
                Name <span className="ml-10">male</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
