import "./App.css";
import Home from "./pages/Home";
import Favorite from './pages/Favourite'
import Notfound from './pages/Notfound'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([])
  const formSuba =(data)=>{
//console.log(data);
setContacts([...contacts,data]);
  }
  const deleteContact=(id)=>{
    let newContact = contacts.filter((singlContact)=>{
      return singlContact.id !== id;
    })
    setContacts(newContact);
  };
  const favToggle=(id)=>{
   let updateContact = contacts.map((singlContact)=>{
     return singlContact.id===id
     ? {...singlContact, fav: !singlContact.fav}
     :singlContact;
   });
   setContacts(updateContact);
  }
  return <div>
    <Router>
      <Navbar/>
<Switch>
  <Route exact path='/'>
    <Home  formSubb={formSuba}  contacts={contacts} favToggle={favToggle} deleteContact={deleteContact}/>
  </Route>
  <Route path='/favourite'>
    <Favorite contacts={contacts} favToggle={favToggle} deleteContact={deleteContact}/>
  </Route>
  <Route path='*'>
    <Notfound />
  </Route>
</Switch>


    </Router>
  </div>;
}

export default App;
