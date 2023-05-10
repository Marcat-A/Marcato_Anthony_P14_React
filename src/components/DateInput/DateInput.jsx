import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "../../pages/CreateEmployee.module.css";

const DateInput = ({ name, type }) => {
  const [date, setDate] = useState();

  return (
    <>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        id={type}
        closeOnScroll={true}
        selected={date}
        placeholderText={name}
        onChange={(newDate) => setDate(newDate)}
        className={css.dateInput}
        required
      />
    </>
  );
};

export default DateInput;
