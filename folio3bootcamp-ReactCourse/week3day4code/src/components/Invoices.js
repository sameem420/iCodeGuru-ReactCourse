// import { getInvoices } from "../data";

// function Invoices() {
//   let inovices = getInvoices();
//   console.log(inovices);
//   return (
//     <main style={{ padding: "1rem 0" }}>
//       {invoices.map((invoice) => {
//         return <div></div>;
//       })}
//     </main>
//   );
// }

// export default Invoices;

import { Link } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.name}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
