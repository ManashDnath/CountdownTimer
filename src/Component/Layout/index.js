import React from "react";
import "../Layout/Layout.css";

export const Layout = ({ countdownData }) => {
  return (
    <div>
      {!countdownData.message.length > 0 ? (
        <div>
          <div id="text-layout">
            <div>
              <div className="text-style">{countdownData.days}</div>
              <div>Days</div>
            </div>
            <div>
              <div className="text-style">{countdownData.hours}</div>
              <div>Hours</div>
            </div>
            <div>
              <div className="text-style">{countdownData.minutes}</div>
              <div>Minutes</div>
            </div>
            <div>
              <div className="text-style">{countdownData.seconds}</div>
              <div>Seconds</div>
            </div>
          </div>
        </div>
      ) : (
        <h1>{countdownData.message}</h1>
      )}
    </div>
  );
};
