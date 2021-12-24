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

import { NavLink, Outlet, useLocation } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  let location = useLocation();
  console.log(location);
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            // className={({ isActive }) => (isActive ? "yellow" : "blue")}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
