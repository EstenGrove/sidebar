import React, { useState, useEffect } from "react";
import styles from "../css/Sidebar.module.scss";
import sprite from "../assets/sidebar.svg";
import SidebarItem from "./SidebarItem";
import {
  tagsHeadings,
  templatesHeadings,
  assetsHeadings,
  datavizHeadings,
  utilsHeadings,
  bugtrackerHeadings,
  styleguideHeadings,
  componentHeadings,
  iconSet
} from "../utils/headings";

const Sidebar = () => {
  const [justClicked, setJustClicked] = useState(null);

  function handleToggles(target) {
    return setJustClicked(target);
  }

  return (
    <aside className={styles.Sidebar}>
      <h2 className={styles.Sidebar_heading}>Dashboard</h2>
      <hr className={styles.Sidebar_divider} />

      {/* SIDENAV MENU CONTAINER */}
      <div className={styles.Sidebar_container}>
        {/* COMPONENTS SECTION */}
        <div className={styles.Sidebar_container_item}>
          <h2 className={styles.Sidebar_container_item_heading}>
            <svg className={styles.heading_icon}>
              <use xlinkHref={`${sprite}#icon-color-palette`} />
            </svg>
            <span className={styles.Sidebar_container_item_heading_title}>
              Components
            </span>
            <svg
              className={
                justClicked
                  ? `${styles.heading_arrow} ${styles.open_close}`
                  : styles.heading_arrow
              }
            >
              <use xlinkHref={`${sprite}#icon-chevron-small-right`} />
            </svg>
          </h2>
          {/* MAIN: SIDEBARITEM COMPONENT GOES HERE... */}
          <SidebarItem subheadings={componentHeadings} />
        </div>

        {/* STYLE GUIDE SECTION */}
        <div className={styles.Sidebar_container_item}>
          <h2
            className={styles.Sidebar_container_item_heading}
            onClick={() => handleToggles("styleGuide")}
          >
            <svg className={styles.heading_icon}>
              <use xlinkHref={`${sprite}#icon-palette`} />
            </svg>
            <span className={styles.Sidebar_container_item_heading_title}>
              Style Guide
            </span>
            <svg
              className={
                justClicked
                  ? `${styles.heading_arrow} ${styles.open_close}`
                  : styles.heading_arrow
              }
            >
              <use xlinkHref={`${sprite}#icon-chevron-small-right`} />
            </svg>
          </h2>
          <SidebarItem subheadings={styleguideHeadings} />
        </div>
        {/* BUG TRACKER SECTION */}
        <div className={styles.Sidebar_container_item}>
          <h2
            className={styles.Sidebar_container_item_heading}
            onClick={() => handleToggles("bugTracker")}
          >
            <svg className={styles.heading_icon}>
              <use xlinkHref={`${sprite}#icon-bug`} />
            </svg>
            <span className={styles.Sidebar_container_item_heading_title}>
              Bug Tracker
            </span>
            <svg
              className={
                justClicked
                  ? `${styles.heading_arrow} ${styles.open_close}`
                  : styles.heading_arrow
              }
            >
              <use xlinkHref={`${sprite}#icon-chevron-small-right`} />
            </svg>
          </h2>
          <SidebarItem subheadings={bugtrackerHeadings} />
        </div>

        {/* UTILS SECTION */}
        <div className={styles.Sidebar_container_item}>
          <h2
            className={styles.Sidebar_container_item_heading}
            onClick={() => handleToggles("utilities")}
          >
            <svg className={styles.heading_icon}>
              <use xlinkHref={`${sprite}#icon-lab-flask`} />
            </svg>
            <span className={styles.Sidebar_container_item_heading_title}>
              Utilities
            </span>
            <svg
              className={
                justClicked
                  ? `${styles.heading_arrow} ${styles.open_close}`
                  : styles.heading_arrow
              }
            >
              <use xlinkHref={`${sprite}#icon-chevron-small-right`} />
            </svg>
          </h2>
          <SidebarItem subheadings={utilsHeadings} />
        </div>

        {/* DATA VIZ */}
        <div className={styles.Sidebar_container_item}>
          <h2
            className={styles.Sidebar_container_item_heading}
            onClick={() => handleToggles("dataViz")}
          >
            <svg className={styles.heading_icon}>
              <use xlinkHref={`${sprite}#icon-chart-pie`} />
            </svg>
            <span className={styles.Sidebar_container_item_heading_title}>
              Data Viz
            </span>
            <svg
              className={
                justClicked
                  ? `${styles.heading_arrow} ${styles.open_close}`
                  : styles.heading_arrow
              }
            >
              <use xlinkHref={`${sprite}#icon-chevron-small-right`} />
            </svg>
          </h2>
          <SidebarItem subheadings={datavizHeadings} />
        </div>

        {/* TEMPLATES SECTION */}
        <div className={styles.Sidebar_container_item}>
          <h2
            className={styles.Sidebar_container_item_heading}
            onClick={() => handleToggles("templates")}
          >
            <svg className={styles.heading_icon}>
              <use xlinkHref={`${sprite}#icon-open-book`} />
            </svg>
            <span className={styles.Sidebar_container_item_heading_title}>
              Templates
            </span>
            <svg
              className={
                justClicked
                  ? `${styles.heading_arrow} ${styles.open_close}`
                  : styles.heading_arrow
              }
            >
              <use xlinkHref={`${sprite}#icon-chevron-small-right`} />
            </svg>
          </h2>
          <SidebarItem subheadings={templatesHeadings} />
        </div>
        {/* ASSETS SECTION */}
        <div className={styles.Sidebar_container_item}>
          <h2
            className={styles.Sidebar_container_item_heading}
            onClick={() => handleToggles("assets")}
          >
            <svg className={styles.heading_icon}>
              <use xlinkHref={`${sprite}#icon-images`} />
            </svg>
            <span className={styles.Sidebar_container_item_heading_title}>
              Assets
            </span>
            <svg
              className={
                justClicked
                  ? `${styles.heading_arrow} ${styles.open_close}`
                  : styles.heading_arrow
              }
            >
              <use xlinkHref={`${sprite}#icon-chevron-small-right`} />
            </svg>
          </h2>
          <SidebarItem subheadings={assetsHeadings} />
        </div>
        {/* TAGS SECTION */}
        <div className={styles.Sidebar_container_item}>
          <h2 className={styles.Sidebar_container_item_heading}>
            <svg className={styles.heading_icon}>
              <use xlinkHref={`${sprite}#icon-tag`} />
            </svg>
            <span className={styles.Sidebar_container_item_heading_title}>
              Tags
            </span>
            <svg className={styles.Sidebar_container_item_subheadings}>
              <use xlinkHref={`${sprite}#icon-chevron-small-right`} />
            </svg>
          </h2>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
