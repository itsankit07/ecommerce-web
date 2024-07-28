import {products} from '../utils/mock-data'
import { useState, useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";

const ProductSlider = () => {

    const calculateTimeLeft = () => {
      const endDate = new Date("Jul 30, 2024 12:00:00").getTime();
      const now = new Date().getTime();
      const distance = endDate - now;
  
      const timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
  
      return distance > 0 ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
     setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  }, []);
 
  const handleScrollLeft = () => {
    const productClass = document.querySelector('.products-class');
    productClass.scrollLeft = productClass.scrollLeft - 250;
  };

  const handleScrollRight = () => {
    const productClass = document.querySelector('.products-class');
    productClass.scrollLeft = productClass.scrollLeft + 250;
  };

  return (
    <div className="w-[1038px] h-[493px] ml-[135px] flex flex-col gap-8">
    <div className="flex gap-4">
        <div className="w-[20px] h-[40px] border-2 rounded bg-orange-700"></div>
        <h4 className="text-orange-700 flex items-center font-poppin font-bold">Todays</h4>
    </div>
    <div className='flex gap-20'>
        <h1 className='text-5xl flex items-center'>Flash Sales</h1>
        <div className='flex flex-col'>
            <ul className='flex gap-8'>
                <li>Days</li>
                <li>Hours</li>
                <li>Minutes</li>
                <li>Seconds</li>
            </ul>
            <div className='flex text-4xl gap-5'>
            <h1>{String(timeLeft.days).padStart(2, '0')} :</h1>
            <h1>{String(timeLeft.hours).padStart(2, '0')} :</h1>
            <h1>{String(timeLeft.minutes).padStart(2, '0')} :</h1>
            <h1>{String(timeLeft.seconds).padStart(2, '0')}</h1>
            </div>
        </div>
        <div className="absolute flex gap-2 right-96">
                  <button
                    onClick={handleScrollLeft}
                    className="flex justify-center cursor-pointer"
                  >
                   <LuArrowLeft />
                  </button>
                  <button
                    onClick={handleScrollRight}
                    className="flex justify-center cursor-pointer"
                  >
                   <LuArrowRight />
                  </button>
        </div>  
    </div>
    
    <div className="max-w-[1308px] h-[350px] overflow-x-scroll overflow-y-hidden scroll-smooth products-class">
        <div className='flex gap-5 px-3'>  
        {products.map((product)=>{
        return (<div className='min-w-[270px] h-[350px]' key ={product.id}>
            <div className='relative'>
            <div className='w-[55px] h-[26px] border rounded bg-orange-600 flex justify-center absolute'>-{product.discount}%</div>
            <CiHeart className='absolute text-2xl right-0 mr-1'/>
            <MdOutlineRemoveRedEye className='absolute text-2xl top-6 right-0 mr-1' />
            <img className='h-[250px] w-[270px] border bg-none flex justify-between rounded' src={product.image} alt="" />
            </div>
            <h3>{product.title}</h3>
            <div>{product.original_price} <span>{product.discounted_price}</span></div>
            <div>{`Stars(rating)`}</div>
        </div>)

    })}
    </div>
    </div>
    <div className='bg-orange-600 w-[234px] h-[56px] border rounded flex justify-center items-center py-4 m-auto text-white cursor-pointer'>View All Products</div>
    </div>
  ) 
}

export default ProductSlider