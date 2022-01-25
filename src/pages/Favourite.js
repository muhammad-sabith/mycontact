import React from "react";
import Contacts from "../components/Contacts";

function Favourite({ contacts, deleteContact, favToggle }) {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
        {contacts.map((singleContact) => {
          return (
            singleContact.fav && (
              <Contacts
                key={singleContact.id}
                favToggle={favToggle}
                contact={singleContact}
                deleteContact={deleteContact}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Favourite;
