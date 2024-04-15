import React from "react";
import "../InputData/InputData.css";

export const InputData = ({
  onDateSelect,
  cleanInterval,
  isCountdownActive,
}) => {
  const [date, setDate] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateSelect(date);
  };

  return (
    <div className="container-input">
      <form onSubmit={handleSubmit}>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="input-date-border"
        />
        <div>
          {!isCountdownActive && (
            <button type="submit" className="button-start">
              start timer
            </button>
          )}
        </div>
        <div>
          {isCountdownActive && (
            <button type="button" onClick={cleanInterval}>
              Cancel timer
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
