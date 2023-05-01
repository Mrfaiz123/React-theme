import React, { useState, useEffect } from "react";

const Clock = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 350); // Set target date 350 days in the future

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDiff = targetDate.getTime() - new Date().getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container flex flex-col items-center justify-center p-3 mt-[-70px] ml-[150px] w-[80%]">
      {/* <h1>Countdown</h1> */}
      <p className="clock text-white w-[45vw] font-bold flex text-6xl items-center justify-evenly">
        <h1 className="text-center text-[70px]">{timeRemaining.days}<br/><p className="text-[20px] ">Days</p></h1>:
        <h1 className="text-center text-[70px]"> {timeRemaining.hours} <br/><p className="text-[20px] ">hours</p></h1>:
        <h1 className="text-center text-[70px]"> {timeRemaining.minutes} <br/><p className="text-[20px] ">Min</p></h1>:
        <h1 className="text-center text-[70px]"> {timeRemaining.seconds} <br/><p className="text-[20px] ">Sec</p></h1>

        {/* : {timeRemaining.hours} :{" "} */}
        {/* {timeRemaining.minutes} : {timeRemaining.seconds}  */}
        
      </p>
    </div>
  );
};



export default Clock



//{/*<div>{time.getFullYear()}</div>*/}
