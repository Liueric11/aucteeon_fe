import React, { useEffect, useState } from 'react';
import CardAuction from 'src/components/CardAuction';
import ProductDescription from 'src/components/ProductDescription';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import getDetailProduct from 'src/api/detailProduct/getDetailProduct';
import { io } from 'socket.io-client';

const DetailPage = () => {
  const history = useNavigate();
  const [product, setProduct] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const [socket, setSocket] = useState(null);
  const [highestBid, setHighestBid] = useState(0);
  const [listBidding, setListBidding] = useState([]);

  useEffect(() => {
    const checkAuth = () => {
      if (!localStorage.getItem('token')) {
        history('/login');
      }
    };
    const getProduct = async () => {
      const data = await getDetailProduct({ id: 1 });
      setProduct({ ...data });
    };
    const getSocket = () => {
      const currentSocket = io(process.env.REACT_APP_API_URL);
      if (currentSocket) {
        setSocket(currentSocket);
      }
    };
    checkAuth();
    getProduct();
    getSocket();
  }, [history]);

  useEffect(() => {
    if (socket && product) {
      // auction join
      socket.on('auction-join-success', (res) => {
        console.log('res success', res);
        if (res && Array.isArray(res.list)) {
          setHighestBid(res.highestBid.bidValue);
          setListBidding(res.list);
        }
      });

      socket.on('auction-join-failed', (res) => {
        console.log('res failed', res);
      });

      const args = {
        userId: user.id,
        productId: product.id
      };
      console.log('args', args);
      socket.emit('auction-join', args);
    }
  }, [socket, product]);

  useEffect(() => {
    // auction bid
    if (socket) {
      socket.on('auction-bid-success', (res) => {
        console.log('res bid success', res);
        setListBidding(res.list);
        setHighestBid(res.highestBid);
      });

      socket.on('auction-bid-failed', (res) => {
        console.log('res bid failed', res);
      });
    }
  }, [socket, listBidding]);

  const onSubmitAuctionBid = (val) => {
    const bidValue = highestBid + parseInt(val);

    const args = {
      userId: user.id,
      productId: product.id,
      bidValue
    };

    console.log('args', args);
    socket.emit('auction-bid', args);
  };

  return (
    <div className="grid grid-cols-1 gap-x-[36px] py-8 lg:grid-cols-10 px-4">
      <div className="col-span-1  lg:col-span-3 sm:mx-auto">
        <img
          className="rounded-md w-1/2 lg:w-full mx-auto"
          src={product ? product.images[0] : ''}
          alt="produk"
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
        <div className="flex justify-centers">
          {product && <ProductDescription data={product} highestBid={highestBid} />}
        </div>
      </div>
      <div className="col-span-1 lg:col-span-3">
        <div className="flex justify-center">
          {product && (
            <CardAuction
              onSubmitBid={(val) => onSubmitAuctionBid(val)}
              openBid={product.initValue}
              listBidding={listBidding}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
