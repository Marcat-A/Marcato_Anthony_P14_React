import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "../../pages/CreateEmployee.module.css";

const DateInput = ({ name }) => {
  const [date, setDate] = useState();
  console.log(date);

  return (
    <div>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        closeOnScroll={true}
        selected={date}
        placeholderText={name}
        onChange={(newDate) => setDate(newDate)}
        className={css.dateInput}
        // customInput={
        //   <div className={css.inputBox}>
        //     <input type="text" name="firstName" required value={date} />
        //     <span>{name}</span>
        //   </div>
        // }
      />
    </div>
  );
};

export default DateInput;
