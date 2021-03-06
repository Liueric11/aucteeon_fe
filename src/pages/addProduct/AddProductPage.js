import React, { useState } from 'react';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import createNewProduct from 'src/api/product/createNewProduct';
import Navbar from 'src/components/Navbar';
import useFetchGetCategory from 'src/hooks/useFetchGetCategory';
// import addImage from 'src/assets/add-image.png';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddProductPage = () => {
  const history = useNavigate();
  const { listCategory } = useFetchGetCategory();
  // const [baseImage, setBaseImage] = useState('');

  const [input, setInput] = useState({
    name: '',
    condition: '',
    initValue: '',
    categoryId: '',
    buyNowValue: 0,
    // multiplicationPrice: 0,
    images: [],
    dateStarted: '',
    dateEnd: ''
  });
  const [desc, setDesc] = useState('');

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
    setInput({ ...input, images: [base64] });
  };

  const deleteImage = () => {
    setInput({ ...input, images: [''] });
  };

  const deleteCharacter = (e) => {
    var mystring = e.split('T').join(' ');
    // console.log('mystinggg', mystring);
    return mystring;
    // setStartBidTime(mystring);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let push = true;
    const keys = Object.keys(input);
    keys.forEach((key) => {
      if (input[key] === '') {
        toast('Please complete the filling form');
        push = false;
      }
    });

    if (desc === '') {
      toast('Please complete the filling form');
      push = false;
    }
    if (push) {
      // setInput({ ...input, startBidTime: deleteCharacter(input.startBidTime) });
      // setInput({ ...input, endBidTime: deleteCharacter(input.endBidTime) });
      input.desc = desc;
      const body = input;
      body.dateStarted = deleteCharacter(input.dateStarted);
      body.dateEnd = deleteCharacter(input.dateEnd);

      await createNewProduct({ body, history });
    }
  };
  // console.log('bodyyyy', body);
  return (
    <div className="w-min-['550px']">
      <Navbar />
      <div className="mx-5">
        <p className="text-2xl md:text-3xl font-bold m-2 mb-10">Add Product</p>
        <div className="p-12 rounded-3xl border-slate-100 border-2 drop-shadow-md">
          <p className="mb-8 md:text-2xl text-xl font-semibold">Upload Product</p>
          <p className="mb-2 text-lg font-medium">Product Photo</p>
          <div className="flex flex-col ">
            <p className="">Upload Here</p>

            <div className=" flex flex-row flex-wrap ">
              <div className="border-dashed border-2 border-slate-400 rounded-2xl items-center sm:justify-center sm:w-96 sm:flex sm:flex-col py-10 px-2 m-3 w-60">
                <img className="sm:w-96 w-10 " src={input.images[0]} alt="" />
                {!input.images[0] ? (
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
          <p className="mb-8 md:text-2xl text-xl font-semibold">Product Information</p>
          <p className="mb-2 text-lg font-medium">Product Name</p>

          <input
            type="text"
            id="name"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-5"
            placeholder="Contoh: Sepatu Pria (Jenis/Kategori Produk) + Merek + Keterangan"
            required
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />

          <p className="mb-2 text-lg font-medium">Category</p>
          <select
            className="form-select appearance-none
          border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-5"
            aria-label="Default select example"
            onChange={(e) => {
              setInput({ ...input, categoryId: e.target.value });
            }}
          >
            <option selected>
              <p className="text-slate-300">Select Category</p>
            </option>
            {listCategory.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <p className="mb-2 text-lg font-medium">Conditions</p>
          <select
            className="form-select appearance-none
          border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 my-5"
            aria-label="Default select example"
            onChange={(e) => {
              setInput({ ...input, condition: e.target.value });
            }}
          >
            <option selected>
              <p className="text-slate-300">Select Condition</p>
            </option>
            <option value="new">New</option>
            <option value="secondhand">Second</option>
          </select>
          <p className="mb-2 text-lg font-medium">Description</p>
          <div className="sm:mb-10 mb-16">
            <ReactQuill style={{ height: '10rem' }} theme="snow" value={desc} onChange={setDesc} />
          </div>
        </div>
        <div className="my-8"></div>
        <div className="p-12 rounded-3xl border-slate-100 border-2 drop-shadow-md">
          <p className="mb-8 md:text-2xl text-xl font-semibold">Price & Auction Time</p>
          <div className="my-3" />
          <p className="text-lg font-medium">Open Price</p>
          <div className="flex flex-row items-center">
            <p className="mr-2">Rp</p>
            <input
              type="text"
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
    </div>
  );
};

export default AddProductPage;
