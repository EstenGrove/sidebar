import React, { useState } from "react";
import styles from "../css/SidebarItem.module.scss";

const SidebarItem = ({ isOpen }) => {
  return (
    <main
      className={
        isOpen
          ? `${styles.Sidebar_container_item_subheadings} ${styles.open}`
          : styles.Sidebar_container_item_subheadings
      }
    >
      <h6 className={styles.Sidebar_container_item_subheadings_heading}>
        Inputs
      </h6>
      <h6 className={styles.Sidebar_container_item_subheadings_heading}>
        Buttons
      </h6>
      <h6 className={styles.Sidebar_container_item_subheadings_heading}>
        Forms
      </h6>
      <h6 className={styles.Sidebar_container_item_subheadings_heading}>
        Navbars
      </h6>
      <h6 className={styles.Sidebar_container_item_subheadings_heading}>
        Cards
      </h6>
      <h6 className={styles.Sidebar_container_item_subheadings_heading}>
        Grids
      </h6>
      <h6 className={styles.Sidebar_container_item_subheadings_heading}>
        Icons
      </h6>
    </main>
  );
};

export default SidebarItem;
