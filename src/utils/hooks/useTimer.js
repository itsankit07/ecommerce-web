import { useState, useEffect } from "react";

const useTimer = () => {
    const calculateTimeLeft = () => {
        const endDate = new Date("August 15, 2024 12:00:00").getTime();
        const now = new Date().getTime();
        const distance = endDate - now;
    
        const timeLeft = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
        console.log(timeLeft);
        
    
        return distance > 0
          ? timeLeft
          : { days: 0, hours: 0, minutes: 0, seconds: 0 };
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      }, []);
      
  return timeLeft;
}

export default useTimer