import React, { useState } from "react";
import css from "./ViewEmployees.module.css";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

const ViewEmployees = () => {
  /**
   * Retrieves the list of employees from localStorage and parses it into an array of objects.
   * Defines the columns to display in the table and their respective data selectors.
   * Defines the custom styles for the table, such as colors for the header and row cells.
   *
   * @type {Array<Object>}
   */

  const employees = useSelector((state) => state.employees.employees);

  const columns = [
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

  /**
   * Defines the custom styles for the table.
   *
   * @type {Object}
   */
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
  const [records, setRecords] = useState(employees);
  const handleFilter = (e) => {
    const newDatas = employees.filter(
      (row) =>
        row.firstname.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.lastname.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.startdate.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.department.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.birthdate.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.street.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.state.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.zipcode.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(newDatas);
  };

  return (
    <main className={css.container}>
      <div className={css.search}>
        <input
          type="text"
          name="filter"
          className={css.filter}
          onChange={() => handleFilter}
        />
        <span>🔎</span>
      </div>
      <DataTable
        columns={columns}
        data={records}
        pagination
        responsive
        customStyles={customStyles}
      ></DataTable>
    </main>
  );
};

export default ViewEmployees;
