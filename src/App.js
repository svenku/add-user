import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {

const [userList, setUserList] = useState([]);

const addUserHandler = (uName, uAge) => {
  setUserList((prevUserList) => {
    return [...prevUserList, {name: uName, age: uAge, id: uuidv4()}];
  });
};

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
