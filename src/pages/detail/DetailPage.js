import React, { useEffect, useState } from 'react';
import CardAuction from 'src/components/CardAuction';
import ProductDescription from 'src/components/ProductDescription';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import getDetailProduct from 'src/api/detailProduct/getDetailProduct';
import { io } from 'socket.io-client';
import TempProfile from '../../assets/profile.png';
import moment from 'moment';
import { Oval } from 'react-loader-spinner';
import Navbar from 'src/components/Navbar';

const DetailPage = () => {
  const history = useNavigate();
  const { id } = useParams();
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
      const data = await getDetailProduct({ id: id });
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
          setHighestBid(res.highestBid.bidValue ? res.highestBid.bidValue : 0);
          setListBidding(res.list);
        }
      });

      socket.on('auction-join-failed', (res) => {
        console.log('res failed', res);
        toast('Failed Join Auction');
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
        // toast('Success Bid');
      });

      socket.on('auction-bid-failed', (res) => {
        console.log('res bid failed', res);
        // toast('Failed Bid');
      });
    }
  }, [socket]);

  const onSubmitAuctionBid = (val) => {
    const bidValue =
      highestBid > product.initValue
        ? highestBid + parseInt(val)
        : product.initValue + parseInt(val);

    const args = {
      userId: user.id,
      productId: product.id,
      bidValue
    };

    console.log('args', args);
    socket.emit('auction-bid', args);
  };

  return (
    <>
      <Navbar />
      {product ? (
        <div className="grid grid-cols-1 gap-x-[36px] py-8 lg:grid-cols-10 px-4">
          {product && (
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
                  src={product.user_detail.avatar ? product.user_detail.avatar : TempProfile}
                  alt="profile"
                />
                <div className="w-3" />
                <p className="font-bold">
                  {product.user_detail.firstname} {product.user_detail.lastname}
                </p>
              </div>
            </div>
          )}
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
                  disable={
                    listBidding.length !== 0 ? listBidding[0].user_detail.userId === user.id : false
                  }
                  close={moment(product.dateEnd.slice(0, -1)).isBefore(moment())}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Oval color="#00BFFF" height={80} width={80} />
        </div>
      )}
    </>
  );
};

export default DetailPage;
