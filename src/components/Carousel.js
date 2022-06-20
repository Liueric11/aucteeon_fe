import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CardProduct from './CardProduct';
import useFetchGetProduct from 'src/hooks/useFetchGetProduct';
// import product from '../assets/product.png';

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
  const { listProduct } = useFetchGetProduct();
  const data = [
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    },
    {
      title: 'judul',
      openBid: 10000,
      timeRemaining: '01:20:30'
    }
  ];
  return (
    <div className="container mx-auto bg-slate-100 rounded-3xl mt-20">
      <div className="flex items-center justify-center w-full h-full py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden w-full"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center ">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden container">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {listProduct.map((data, index) => {
                    console.log(data);
                    return (
                      <Slide index={index} key={data}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-60 mx-80">
                          <CardProduct data={data} />
                        </div>
                      </Slide>
                    );
                  })}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden w-full"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden container">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {listProduct.map((data, index) => {
                    return (
                      <Slide index={index} key={data}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-60 mx-80">
                          <CardProduct data={data} />
                        </div>
                      </Slide>
                    );
                  })}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 "
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="slate-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden container w-full"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center ">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  {listProduct.map((data, index) => {
                    return (
                      <Slide key={data} index={index}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-60 mx-80">
                          <CardProduct data={data} />
                        </div>
                      </Slide>
                    );
                  })}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
