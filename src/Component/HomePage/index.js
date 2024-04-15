import React from "react";
import { Layout } from "../Layout/index";
import { InputData } from "../InputData/index";
import "../HomePage/HomePage.css";

export const HomePage = () => {
  const [isCountdownActive, setIsCountdownActive] = React.useState(false);
  const [countdownData, setCountdownData] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    message: "",
  });
  const [intervalId, setIntervalId] = React.useState(null);

  const startCountdown = (targetDateTime) => {
    clearInterval(intervalId);
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDateTime);

      if (target > now) {
        const distance = target - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days <= 99 && hours <= 23 && minutes <= 59 && seconds <= 59) {
          setCountdownData({
            days,
            hours,
            minutes,
            seconds,
            message: "",
          });
        } else {
          setCountdownData({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            message: "Selected data is more then 99 days",
          });
        }
      } else {
        setIsCountdownActive(false);
        setCountdownData({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          message: "Countdown is over",
        });
        clearInterval(interval);
      }
    }, 1000);
    setIntervalId(interval);
  };

  React.useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const handleDateChange = (date) => {
    startCountdown(date);
  };

  const deleteInterval = () => {
    clearInterval(intervalId);
    setIsCountdownActive(false);
    setCountdownData({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      message: "",
    });
  };

  return (
    <div className="container">
      <h1>
        CountDown <span className="text">Timer</span>
      </h1>
      <InputData
        onDateSelect={handleDateChange}
        cleanInterval={deleteInterval}
        isCountdownActive={isCountdownActive}
      />
      <Layout countdownData={countdownData} />
    </div>
  );
};
