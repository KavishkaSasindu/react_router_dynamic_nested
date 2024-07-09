import React from "react";
import { useParams } from "react-router-dom";

const OneUser = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <h1>One User Details Page</h1>
    </div>
  );
};

export default OneUser;
