import React from "react";
import css from "./CreateEmployee.module.css";
import DateInput from "../components/DateInput/DateInput";

const CreateEmployee = () => {
  return (
    <main>
      <h1 className={css.title}>Create Employee</h1>
      <div className={css.container}>
        <form action="" className={css.form}>
          <div className={css.firstInputs}>
            <div className={css.inputBox}>
              <input type="text" name="firstName" required />
              <span>First Name</span>
            </div>
            <div className={css.inputBox}>
              <input type="text" name="lastName" required />
              <span>Last Name</span>
            </div>
            <DateInput name="DATE OF BIRTH" />
            <DateInput name="START DATE" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateEmployee;
