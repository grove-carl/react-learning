import styles from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  if (!props.isShown) {
    return null;
  } else {
    return (
      <div>
        <div className={styles.backdrop} onClick={props.onClickButton} />
        <Card styles={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.onClickButton}>Okay</Button>
          </footer>
        </Card>
      </div>
    );
  }
};

export default ErrorModal;
