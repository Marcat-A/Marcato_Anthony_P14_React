import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = {
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        birthdate: action.payload.birthdate,
        startdate: action.payload.startdate,
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.state,
        zipcode: action.payload.zipcode,
        department: action.payload.department,
      };
      state.employees.push(newEmployee);
    },
  },
});

export default employeesSlice;
