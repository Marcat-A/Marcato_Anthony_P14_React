import React from "react";
import css from "./ViewEmployees.module.css";
import DataTable from "react-data-table-component";

const ViewEmployees = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  let columns = [
    { name: "First Name", selector: (row) => row.firstname, sortable: true },
    { name: "Last Name", selector: (row) => row.lastname, sortable: true },
    { name: "Start Date", selector: (row) => row.startdate, sortable: true },
    { name: "Department", selector: (row) => row.department, sortable: true },
    { name: "Date of Birth", selector: (row) => row.birthdate, sortable: true },
    { name: "Street", selector: (row) => row.street, sortable: true },
    { name: "City", selector: (row) => row.city, sortable: true },
    { name: "State", selector: (row) => row.state, sortable: true },
    { name: "Zip Code", selector: (row) => row.zipcode, sortable: true },
  ];
  const customStyles = {
    headCells: {
      style: {
        color: "var(--primary-color)",
      },
    },
    rows: {
      style: {
        "&:hover": {
          color: "var(--primary-color)",
        },
      },
    },
  };

  return (
    <main className={css.container}>
      <DataTable
        columns={columns}
        data={employees}
        pagination
        responsive
        customStyles={customStyles}
      ></DataTable>
    </main>
  );
};

export default ViewEmployees;
