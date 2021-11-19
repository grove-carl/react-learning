import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    validInputFields();
    props.onAddUser({ key: generateKey(), username: username, age: age });
    resetInputFields();
  };

  const validInputFields = () => {
    if (username.trim().length === 0 || age.trim().length === 0 || +age < 1) {
      return;
    }
  };

  const generateKey = () => {
    return username + age + Math.random();
  };

  const resetInputFields = () => {
    setUsername("");
    setAge("");
  };

  const usernameInputHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card styles={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameInputHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={age} onChange={ageInputHandler} />
        <Button type="submit" onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
