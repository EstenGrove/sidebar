import React, { useState } from "react";
import styles from "../css/SidebarItem.module.scss";

const SidebarItem = ({ isOpen, subheadings }) => {
  return (
    <>
      <main
        className={
          isOpen
            ? `${styles.Sidebar_container_item_subheadings} ${styles.open}`
            : styles.Sidebar_container_item_subheadings
        }
      >
        {subheadings.length > 0 &&
          subheadings.map((item, index) => (
            <h6
              className={styles.Sidebar_container_item_subheadings_heading}
              key={index}
            >
              {item}
            </h6>
          ))}
      </main>
    </>
  );
};

export default SidebarItem;
