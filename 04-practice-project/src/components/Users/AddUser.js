import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isErrorModalShown, setIsErrorModalShown] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const isInputValid = validInputFields();
    if (isInputValid) {
      props.onAddUser({ key: generateKey(), username: username, age: age });
      resetInputFields();
    }
  };

  const validInputFields = () => {
    if (username.trim().length === 0 || age.trim().length === 0) {
      setErrorTitle("Invalid input");
      setErrorMessage("Please enter a valid name and age (non-empty values).");
      showErrorModal();
      return false;
    } else if (+age < 1) {
      setErrorTitle("Invalid input");
      setErrorMessage("Please enter a valid age (>0).");
      showErrorModal();
      return false;
    } else {
      return true;
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

  const showErrorModal = () => {
    setIsErrorModalShown(true);
  };

  const hideErrorModal = () => {
    setIsErrorModalShown(false);
  };

  return (
    <div>
      <ErrorModal
        title={errorTitle}
        message={errorMessage}
        isShown={isErrorModalShown}
        onClickButton={hideErrorModal}
      />
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
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageInputHandler}
          />
          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
