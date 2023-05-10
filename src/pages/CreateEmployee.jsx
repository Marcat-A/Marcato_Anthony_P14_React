import React, { useState } from "react";
import css from "./CreateEmployee.module.css";
import DateInput from "../components/DateInput/DateInput";
import DropdownInput from "react-marcat-dropdown/dropdown";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../components/Modal/Modal";

const CreateEmployee = ({ employees }) => {
  /**
   * Whether or not the modal is currently open.
   * @type {boolean}
   */
  const [modalOpen, setModalOpen] = useState(false);

  /**
   * State and department data for a company form.
   * @typedef {Object} State
   * @property {string} name - The name of a state in the United States.
   * @property {string} abbreviation - The two-letter abbreviation for a state in the United States.
   *
   * @typedef {Object} Department
   * @property {string} name - The name of a department in a company.
   */

  /**
   * The state data for the United States.
   * @type {State[]}
   */
  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

  /**
   * The names of the states in the United States.
   * @type {string[]}
   */
  const state = states.map((state) => {
    return state.name;
  });

  /**
   * The department data for a company.
   * @type {Department[]}
   */
  const departments = [
    { name: "Sales" },
    { name: "Marketing" },
    { name: "Engineering" },
    { name: "Human Resources" },
    { name: "Legal" },
  ];

  /**
   * The names of the departments in a company.
   * @type {string[]}
   */
  const department = departments.map((department) => {
    return department.name;
  });

  /**
   * Handles the submission of the employee form.
   * Retrieves the form values, creates a new Employee object with these values,
   * adds the new employee to the employees array and stores the updated array
   * in localStorage. Finally, updates the state of modalOpen to display a notification.
   * @function
   * @returns {void}
   */
  const handleSubmit = () => {
    // Retrieves the form values
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const birthdate = document.getElementById("birthdate").value;
    const startdate = document.getElementById("startdate").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipcode = document.getElementById("zipcode").value;
    const department = document.getElementById("department").value;

    // Creates a new Employee object with the retrieved values
    let newEmployee = {
      firstname: firstname,
      lastname: lastname,
      birthdate: birthdate,
      startdate: startdate,
      street: street,
      city: city,
      state: state,
      zipcode: zipcode,
      department: department,
    };

    // Adds the new Employee to the employees array
    employees.push(newEmployee);

    // Stores the updated employees array in localStorage
    localStorage.setItem("employees", JSON.stringify(employees));

    // Updates the state of modalOpen to display a notification
    setModalOpen(true);
  };

  return (
    <main>
      <h1 className={css.title}>Create Employee</h1>
      <div className={css.container}>
        <form action="" className={css.form}>
          <h2 className={css.secondTitle}>Employee description</h2>
          <div className={css.firstInputs}>
            <div className={css.inputBox}>
              <input type="text" name="firstName" required id="firstname" />
              <span>First Name</span>
            </div>
            <div className={css.inputBox}>
              <input type="text" name="lastName" required id="lastname" />
              <span>Last Name</span>
            </div>
            <DateInput name="DATE OF BIRTH" type="birthdate" />
            <DateInput name="START DATE" type="startdate" />
          </div>
          <h2 className={css.secondTitle}>Employee Address</h2>
          <div className={css.secondInputs}>
            <div className={css.inputBox}>
              <input type="text" name="street" required id="street" />
              <span>Street</span>
            </div>
            <div className={css.inputBox}>
              <input type="text" name="city" required id="city" />
              <span>City</span>
            </div>
            <DropdownInput
              personnalId="state"
              name="states"
              data={state}
              defaultText="Please select the employee state"
              scrollBarBackgroundColor="rgba(0,0,0,0.15)"
              scrollBarThumbColor="#718ae9"
              scrollBarWidth="8px"
              scrollBarRadius="10px"
              color="#718ae9"
              borderColor="rgba(0,0,0,0.25)"
              borderRadius="5px"
              fontSize="1em"
              selectBoxColor="#fff"
              selectBoxOptionsColor="rgba(0,0,0,0.25)"
            />
            <div className={css.inputBox}>
              <input type="number" name="zipcode" required id="zipcode" />
              <span>Zip Code</span>
            </div>
          </div>
          <h2 className={css.secondTitle}>Department</h2>
          <div className={css.thirdInputs}>
            <DropdownInput
              name="departments"
              data={department}
              personnalId="department"
              defaultText="Please select the employee department"
              scrollBarBackgroundColor="rgba(0,0,0,0.15)"
              scrollBarThumbColor="#718ae9"
              scrollBarWidth="8px"
              scrollBarRadius="10px"
              color="#718ae9"
              borderColor="rgba(0,0,0,0.25)"
              borderRadius="5px"
              selectBoxColor="#fff"
              selectBoxOptionsColor="rgba(0,0,0,0.25)"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className={css.button}
            onClick={() => handleSubmit()}
          >
            Save
          </motion.button>
        </form>
      </div>
      <AnimatePresence
        initial={false}
        mode={"wait"}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            handleClose={() => setModalOpen(false)}
            text={`The employee has been created ! `}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default CreateEmployee;
