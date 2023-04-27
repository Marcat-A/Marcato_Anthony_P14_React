import React from "react";
import css from "./CreateEmployee.module.css";
import DateInput from "../components/DateInput/DateInput";
import DropdownInput from "../components/DropdownInput/DropdownInput.tsx";

const CreateEmployee = () => {
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

  const state = states.map((state) => {
    return state.name;
  });

  const departments = [
    { name: "Sales" },
    { name: "Marketing" },
    { name: "Engineering" },
    { name: "Human Resources" },
    { name: "Legal" },
  ];

  const department = departments.map((department) => {
    return department.name;
  });

  return (
    <main>
      <h1 className={css.title}>Create Employee</h1>
      <div className={css.container}>
        <form action="" className={css.form}>
          <h2 className={css.secondTitle}>Employee description</h2>
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
          <h2 className={css.secondTitle}>Employee Address</h2>
          <div className={css.secondInputs}>
            <div className={css.inputBox}>
              <input type="text" name="street" required />
              <span>Street</span>
            </div>
            <div className={css.inputBox}>
              <input type="text" name="city" required />
              <span>City</span>
            </div>
            <DropdownInput
              name="states"
              data={state}
              defaultText="Please select your state"
              scrollBarBackgroundColor="pink"
              scrollBarThumbColor="#718ae9"
              scrollBarWidth="8px"
              scrollBarRadius="10px"
              color="#718ae9"
              borderColor="rgba(0,0,0,0.25)"
              borderRadius="5px"
              selectBoxColor="#fff"
              selectBoxOptionsColor="rgba(0,0,0,0.25)"
            />
            <div className={css.inputBox}>
              <input type="number" name="zipcode" required />
              <span>Zip Code</span>
            </div>
          </div>
          <h2 className={css.secondTitle}>Department</h2>
          <div className={css.thirdInputs}>
            <DropdownInput data={department} />
          </div>
          <button type="submit" className={css.button}>
            Save
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateEmployee;
