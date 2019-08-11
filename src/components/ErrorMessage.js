import React from "react";
import styles from "../css/ErrorMessage.module.scss";

const ErrorMessage = ({ err, msg }) => {
  return (
    <div className={styles.ErrorMessage}>
      <h4 className={styles.ErrorMessage_title}>An error occured!</h4>
      <p className={styles.ErrorMessage_details}>{err.toString()}</p>
      <p className={styles.ErrorMessage_details}>{msg.toString()}</p>
    </div>
  );
};

export default ErrorMessage;
