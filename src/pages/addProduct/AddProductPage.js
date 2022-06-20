import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import createNewProduct from 'src/api/product/createNewProduct';
import useFetchGetCategory from 'src/hooks/useFetchGetCategory';
// import addImage from 'src/assets/add-image.png';

const AddProductPage = () => {
  // const history = useNavigate();
  const { listCategory } = useFetchGetCategory();
  console.log('listttt', listCategory);
  const [input, setInput] = useState({
    name: '',
    condition: '',
    initValue: '',
    categoryId: '',
    // buyNowValue: 0,
    // multiplicationPrice: 0,
    dateStarted: '',
    dateEnd: ''
  });

  // useEffect(() => {
  //   const checkAuth = () => {
  //     if (localStorage.getItem('token')) {
  //       history('/');
  //     }
  //   };
  //   checkAuth();
  // }, [history]);

  // const [name, setName] = useState('');
  // const [cat, setCat] = useState('');
  // const [openPrice, setOpenPrice] = useState(0);
  // const [buyNowPrice, setBuyNowPrice] = useState(0);
  // const [multiplicationPrice, setMultiplicationPrice] = useState(0);
  // const [startBidTime, setStartBidTime] = useState('');
  // const [endBidTime, setEndBidTime] = useState(0);

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
    if (file.size > 1048576) {
      alert('File Terlalu besar');
    }
    setBaseImage(base64);
  };

  const deleteImage = () => {
    setBaseImage('');
  };

  const deleteCharacter = (e) => {
    var mystring = e.split('T').join(' ');
    // console.log('mystinggg', mystring);
    return mystring;
    // setStartBidTime(mystring);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setInput({ ...input, startBidTime: deleteCharacter(input.startBidTime) });
    // setInput({ ...input, endBidTime: deleteCharacter(input.endBidTime) });
    const body = input;
    body.dateStarted = deleteCharacter(input.dateStarted);
    body.dateEnd = deleteCharacter(input.dateEnd);

    console.log('kaaaaa', body);
    // await createNewProduct({ body, history });
  };
  // console.log('bodyyyy', body);
  return (
    <div>
      <p className="text-2xl md:text-3xl font-bold m-2 mb-10">Add Product</p>
      <div className="p-12 rounded-3xl border-slate-100 border-2 drop-shadow-md">
        <p className="mb-8 md:text-2xl text-xl font-semibold">Upload Product</p>
        <p className="mb-2 text-lg font-medium">Product Photo</p>
        <div className="flex flex-col ">
          <div>
            <p className="">Upload Gambar disini.</p>
          </div>
          <div className=" flex flex-row flex-wrap w-full">
            <div className="border-dashed border-2 border-slate-400 rounded-2xl items-center justify-center flex flex-col p-10 m-3">
              <img className="w-96" src={baseImage} alt="" />
              {!baseImage ? (
                <input
                  type="file"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
              ) : (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-6"
                  onClick={() => {
                    deleteImage();
                  }}
                >
                  Hapus
                </button>
              )}
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
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <p className="mb-2 text-lg font-medium">Kategori</p>
        <select
          className="form-select appearance-none
          border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-5"
          aria-label="Default select example"
          onChange={(e) => {
            setInput({ ...input, categoryId: e.target.value });
          }}
        >
          <option selected>
            <p className="text-slate-300">Pilih Kategori</p>
          </option>
          {listCategory.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <p className="mb-2 text-lg font-medium">Kondisi</p>
        <select
          className="form-select appearance-none
          border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-5"
          aria-label="Default select example"
          onChange={(e) => {
            setInput({ ...input, condition: e.target.value });
          }}
        >
          <option selected>
            <p className="text-slate-300">Pilih Kondisi</p>
          </option>
          <option value="new">Baru</option>
          <option value="secondhand">Bekas</option>
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
            id="initValue"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-2"
            placeholder="10000"
            required
            onChange={(e) => setInput({ ...input, initValue: e.target.value })}
          />
        </div>
        <div className="my-3" />
        {/* <p className="text-lg font-medium">Buy It Now Price</p>
        <div className="flex flex-row items-center">
          <p className="mr-2">Rp</p>
          <input
            type="number"
            id="buyNowPrice"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-2"
            placeholder="10000"
            required
            onChange={(e) => setInput({ ...input, buyNowPrice: e.target.value })}
          />
        </div> */}
        {/* <div className="my-3" />
        <p className="text-lg font-medium">Multiplication Price</p>
        <div className="flex flex-row items-center">
          <p className="mr-2">Rp</p>
          <input
            type="number"
            id="multiplicationPrice"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-2"
            placeholder="10000"
            required
            onChange={(e) => setInput({ ...input, multiplicationPrice: e.target.value })}
          />
        </div> */}
        <div className="my-3" />
        <p className="text-lg font-medium">Start Bid Time</p>
        <input
          className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-2"
          required
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          onChange={(e) => setInput({ ...input, dateStarted: e.target.value })}
        />

        <div className="my-3" />
        <p className="text-lg font-medium">End Bid Time</p>
        <input
          className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-2"
          required
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          onChange={(e) => setInput({ ...input, dateEnd: e.target.value })}
        />
      </div>
      <div className="my-4" />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full my-6"
        onClick={handleSubmit}
      >
        Save
      </button>
    </div>
  );
};

export default AddProductPage;
