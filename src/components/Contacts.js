import React from "react";

function Contacts({
  contact,
  deleteContact,
  fav,
  favToggle
}) {
  console.log(contact);
  console.log("reghrth");
  return (
    <>
      <div className="col">
        <div className="card shadow-sm w-100">
          <div className="card-header">
            <div className="row">
              <div className="col-6 ">{contact.name}</div>
              <div
                onClick={() => {
                  favToggle(contact.id);
                }}
                className="col-2 offset-4"
              >
                <i
                  className={
                    fav
                      ? "fas fa-star text-warning"
                      : "far fa-star text-warning"
                  }
                ></i>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{contact.email}</li>
            <li className="list-group-item">{contact.phone}</li>
            <li className="list-group-item">
              <button
                onClick={() => {
                  deleteContact(contact.id);
                }}
                type="button"
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contacts;
