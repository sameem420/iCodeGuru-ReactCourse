import React from "react";
import { useParams, useLocation } from "react-router-dom";

function Invoice() {
  let params = useParams();
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Inovice # {params.invoiceId}</h1>
    </div>
  );
}

export default Invoice;
