import React, { useState } from "react";
import styles from "../css/SidebarItem.module.scss";
import sprite from "../assets/sidebar.svg";

const SidebarItem = ({ heading, subheadings, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h2
        className={styles.Sidebar_container_item_heading}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className={styles.heading_icon}>
          <use xlinkHref={`${sprite}${icon}`} />
        </svg>
        <span className={styles.Sidebar_container_item_heading_title}>
          {heading}
        </span>
        <svg
          className={
            isOpen
              ? `${styles.heading_arrow} ${styles.open_close}`
              : styles.heading_arrow
          }
        >
          <use xlinkHref={`${sprite}#icon-chevron-small-right`} />
        </svg>
      </h2>
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
