import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home";
import { createContact, deleteContact } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const contactNameRef = useRef(null);
  const contactNumberRef = useRef(null);
  const dispatch = useDispatch();
  const contactsData = useSelector((state) => state.contact);
  console.log(contactsData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactName = contactNameRef.current.value;
    const contactNumber = contactNumberRef.current.value;
    const contact = { contactName, contactNumber };
    dispatch(createContact(contact));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="contactName" className="form-label">
            Contact Name
          </label>
          <input
            type="text"
            className="form-control"
            id="contactName"
            ref={contactNameRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">
            Contact Number
          </label>
          <input
            type="number"
            className="form-control"
            id="contactNumber"
            ref={contactNumberRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {contactsData.map((contact, idx) => {
        return (
          <div key={idx}>
            <h1>Contact Name : {contact.contactName}</h1>
            <h1>Contact Number : {contact.contactNumber}</h1>\
            <button
              onClick={() => dispatch(deleteContact(idx))}
              className="btn btn-danger"
            >
              Remove Contact
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
