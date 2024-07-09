import React from "react";
import { Link, Outlet } from "react-router-dom";

const BookNav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/books/2"}>Book 2</Link>
        </li>
        <li>
          <Link to={"/books/1"}>One Book</Link>
        </li>
        <li>
          <Link to={"/books/new"}>New Book</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default BookNav;
