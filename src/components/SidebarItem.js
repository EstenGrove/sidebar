import React, { useState } from "react";
import styles from "../css/SidebarItem.module.scss";
import sprite from "../assets/sidebar.svg";

const SidebarItem = ({ heading, subheadings, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <linearGradient id="g1" y1="100%">
            <stop stopColor="#5183f5" />
            <stop offset=".25" stopColor="#5379f7" />
            <stop offset=".5" stopColor="#5b6df8" />
            <stop offset=".75" stopColor="#6560f8" />
            <stop offset="1" stopColor="#7251f5" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g1)" />
      </svg>

      <h2
        className={styles.Sidebar_container_item_heading}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={styles.Sidebar_container_item_heading_icon}
          style={{ fill: "url(#g1)" }}
        >
          <use xlinkHref={`${sprite}${icon}`} />
        </svg>
        <span
          className={
            isOpen
              ? `${styles.Sidebar_container_item_heading_title} ${styles.active}`
              : styles.Sidebar_container_item_heading_title
          }
        >
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
