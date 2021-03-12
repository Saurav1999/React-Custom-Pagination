import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import "./App.scss";

function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(users.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((user) => {
      return (
        <div className="user">
          <h3>{user.first_name}</h3>
          <h3>{user.last_name}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

  return (
    <div>
      <h2>USERS</h2>
      <div className="users-container">{displayUsers}</div>

      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={4}
        marginPagesDisplayed={0}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
