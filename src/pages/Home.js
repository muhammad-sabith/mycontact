import React from "react";
import Contacts from "../components/Contacts";
import Form from "../components/Form";

function Home({ formSubb, contacts, deleteContact, favToggle }) {
  console.log(contacts);
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-sm-center">
          <Form formSubc={formSubb} />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            {contacts?.map((singleContact) => {
              return(
              <Contacts 
                key={singleContact.id}
                favToggle={favToggle}
                contact={singleContact}
                deleteContact={deleteContact}
              />
              )
            })}
            {contacts.lenght === 0 && <div>No Contacts</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
