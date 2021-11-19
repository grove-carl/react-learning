import React from 'react';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';

function App() {
  const users = [{name: 'admin', age: 23}, {name: 'guest', age: 21}];
  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;
