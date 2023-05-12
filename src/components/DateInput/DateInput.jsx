import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "../../pages/CreateEmployee.module.css";

/**
 * Component for a date input field.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.type - The type of the input field.
 * @returns {JSX.Element} - The rendered DateInput component.
 */
const DateInput = ({ name, type }) => {
  const [date, setDate] = useState();

  return (
    <>
      {/* Date picker component */}
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
