import React, { useState } from "react";
import css from "./ViewEmployees.module.css";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

const ViewEmployees = () => {
  /**
   * List of employees retrieved from the global state.
   *
   * @type {Array}
   */
  const employees = useSelector((state) => state.employees.employees);

  /**
   * Table columns.
   *
   * Each column is represented by an object with the following properties:
   * - name: The column name.
   * - selector: The selection function that returns the value of the column for a given row.
   * - sortable: Indicates whether the column is sortable (true/false).
   *
   * @type {Array}
   */
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
  /**
   * List of employees refreshed from the global state.
   *
   * @type {Array}
   */
  const [records, setRecords] = useState(employees);

  /**
   * Handles the filtering of records based on the provided input value.
   *
   * @param {object} e - The event object.
   */
  const handleFilter = (e) => {
    const newDatas = employees.filter(
      (row) =>
        row.firstname.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.lastname.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.startdate.includes(e.target.value.toLowerCase()) ||
        row.department.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.birthdate.includes(e.target.value.toLowerCase()) ||
        row.street.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.state.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.zipcode.includes(e.target.value.toLowerCase())
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
          onChange={(e) => handleFilter(e)}
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
