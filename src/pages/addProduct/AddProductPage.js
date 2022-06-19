import React, { useState } from 'react';
import addImage from 'src/assets/add-image.png';

const AddProductPage = () => {
  const [name, setName] = useState('');
  const [cat, setCat] = useState('');
  const [openPrice, setOpenPrice] = useState(0);
  const [buyNowPrice, setBuyNowPrice] = useState(0);
  const [multiplicationPrice, setMultiplicationPrice] = useState(0);
  const [startBidTime, setStartBidTime] = useState('');
  const [endBidTime, setEndBidTime] = useState(0);

  const body = {
    name: name,
    cat: cat,
    openPrice: openPrice,
    buyNowPrice: buyNowPrice,
    multiplicationPrice: multiplicationPrice,
    startBidTime: startBidTime,
    endBidTime: endBidTime
  };

  const [baseImage, setBaseImage] = useState('');

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  console.log('bodyyyy', body);
  return (
    <div>
      <p className="text-2xl md:text-3xl font-bold m-2 mb-10">Tambahkan Produk</p>
      <div className="p-12 rounded-3xl border-slate-100 border-2 drop-shadow-md">
        <p className="mb-8 md:text-2xl text-xl font-semibold">Unggah Produk</p>
        <p className="mb-2 text-lg font-medium">Foto Produk</p>
        <div className="flex flex-col ">
          <div>
            <p className="">
              Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px (Untuk gambar optimal
              gunakan ukuran minimum 700 x 700 px).
            </p>
          </div>
          <div className=" flex flex-row flex-wrap w-full">
            <div className="border-dashed border-2 border-slate-400 rounded-2xl items-center justify-center flex flex-col p-10 m-3">
              <img className="w-96" src={baseImage} alt="" />
              <input
                type="file"
                onChange={(e) => {
                  uploadImage(e);
                }}
              />

              <p className="text-center">Foto Utama</p>
            </div>
            {/* <div className="border-dashed border-2 border-slate-400 rounded-2xl items-center justify-center flex flex-col p-10 m-3">
              <img className="w-10" src={addImage} alt="" />
              <p className="text-center">Foto Utama</p>
            </div>
            <div className="border-dashed border-2 border-slate-400 rounded-2xl items-center justify-center flex flex-col p-10 m-3">
              <img className="w-10" src={addImage} alt="" />
              <p className="text-center">Foto Utama</p>
            </div>
            <div className="border-dashed border-2 border-slate-400 rounded-2xl items-center justify-center flex flex-col p-10 m-3">
              <img className="w-10" src={addImage} alt="" />
              <p className="text-center">Foto Utama</p>
            </div>
            <div className="border-dashed border-2 border-slate-400 rounded-2xl items-center justify-center flex flex-col p-10 m-3">
              <img className="w-10" src={addImage} alt="" />
              <p className="text-center">Foto Utama</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="my-8"></div>
      <div className="p-12 rounded-3xl border-slate-100 border-2 drop-shadow-md">
        <p className="mb-8 md:text-2xl text-xl font-semibold">Informasi Produk</p>
        <p className="mb-2 text-lg font-medium">Nama Produk</p>
        <p>
          Nama min. 5 kata, terdiri dari jenis produk, merek, dan keterangan seperti warna, bahan,
          atau tipe.
        </p>
        <input
          type="text"
          id="name"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-5"
          placeholder="Contoh: Sepatu Pria (Jenis/Kategori Produk) + Merek + Keterangan"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <p className="mb-2 text-lg font-medium">Kategori</p>
        <select
          className="form-select appearance-none
          border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-5"
          aria-label="Default select example"
          onChange={(e) => {
            setCat(e.target.value);
          }}
        >
          <option selected>
            <p className="text-slate-300">Pilih Kategori</p>
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="my-8"></div>
      <div className="p-12 rounded-3xl border-slate-100 border-2 drop-shadow-md">
        <p className="mb-8 md:text-2xl text-xl font-semibold">Harga & Waktu Lelang</p>
        <div className="my-3" />
        <p className="text-lg font-medium">Open Price</p>
        <div className="flex flex-row items-center">
          <p className="mr-2">Rp</p>
          <input
            type="number"
            id="openPrice"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-2"
            placeholder="10000"
            required
            onChange={(e) => setOpenPrice(e.target.value)}
          />
        </div>
        <div className="my-3" />
        <p className="text-lg font-medium">Buy It Now Price</p>
        <div className="flex flex-row items-center">
          <p className="mr-2">Rp</p>
          <input
            type="number"
            id="buyNowPrice"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-2"
            placeholder="10000"
            required
            onChange={(e) => setBuyNowPrice(e.target.value)}
          />
        </div>
        <div className="my-3" />
        <p className="text-lg font-medium">Multiplication Price</p>
        <div className="flex flex-row items-center">
          <p className="mr-2">Rp</p>
          <input
            type="number"
            id="multiplicationPrice"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-2"
            placeholder="10000"
            required
            onChange={(e) => setMultiplicationPrice(e.target.value)}
          />
        </div>
        <div className="my-3" />
        <p className="text-lg font-medium">Start Bid Time</p>
        <input
          className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-2"
          required
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          onChange={(e) => setStartBidTime(e.target.value)}
        />

        <div className="my-3" />
        <p className="text-lg font-medium">End Bid Time</p>
        <input
          className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-2"
          required
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          onChange={(e) => setEndBidTime(e.target.value)}
        />
      </div>
      <div className="my-4" />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full my-6"
      >
        Save
      </button>
    </div>
  );
};

export default AddProductPage;
