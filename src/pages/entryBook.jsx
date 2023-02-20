import "./entryBook.css";
import { useSelector } from "react-redux";

import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { CSVLink } from "react-csv";

export default function EntryBook() {
  const Bookings = useSelector((state) => state.bookings);
  console.log(Bookings);
  
  

  const columns = [
    {
      dataField: "firstName",
      text: "First Name",
      sort: true,
    },
    {
      dataField: "lastName",
      text: "Last Name",
      sort: true,
    },
    {
      dataField: "phone",
      text: "Phone",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      dataField: "guest",
      text: "Guest's",
      sort: true,
    },
    {
      dataField: "adults",
      text: "Adults",
      sort: true,
    },
    {
      dataField: "childrens",
      text: "Childrens",
      sort: true,
    },
    {
      dataField: "checkin",
      text: "Check-in Date",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "checkout",
      text: "Check-out Date",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "category",
      text: "Room Type",
      sort: true,
      filter: textFilter(),
    },
  ];


  return (
  <>
   <div id="table-container">
      {/* <h1> All Entries</h1>
      <CSVLink id="csv" data={entry}>Download </CSVLink>
      <BootstrapTable
        bootstrap4
        keyField= "id"
        columns={columns}
        data={entry}
        filter={filterFactory()}
      /> */}

      {Bookings.map((bookings)=>(
        <div>{bookings.firstName}</div>
      ))}

  </div>
  </>);
}
