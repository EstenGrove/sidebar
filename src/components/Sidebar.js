import React, { useState, useEffect } from "react";
import styles from "../css/Sidebar.module.scss";
import sprite from "../assets/sidebar.svg";

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
          <main
            className={
              justClicked
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
          <main
            className={
              justClicked
                ? `${styles.Sidebar_container_item_subheadings} ${styles.open}`
                : styles.Sidebar_container_item_subheadings
            }
          >
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Standards
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Colors
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Classes
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Typography
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Mobile
            </h6>
          </main>
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
          <main
            className={
              justClicked
                ? `${styles.Sidebar_container_item_subheadings} ${styles.open}`
                : styles.Sidebar_container_item_subheadings
            }
          >
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Open
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              In-Progress
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Closed
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Add New
            </h6>
          </main>
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
          <main
            className={
              justClicked
                ? `${styles.Sidebar_container_item_subheadings} ${styles.open}`
                : styles.Sidebar_container_item_subheadings
            }
          >
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              React
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              JS
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              CSS
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              HTML
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Mobile
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Python
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Bash
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Linux
            </h6>
          </main>
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
          <main
            className={
              justClicked
                ? `${styles.Sidebar_container_item_subheadings} ${styles.open}`
                : styles.Sidebar_container_item_subheadings
            }
          >
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Charts
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Tables
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Free-Form
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Vendor
            </h6>
          </main>
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
          <main
            className={
              justClicked
                ? `${styles.Sidebar_container_item_subheadings} ${styles.open}`
                : styles.Sidebar_container_item_subheadings
            }
          >
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              React
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              CSS/Sass
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Webpack
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Express
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Add New
            </h6>
          </main>
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
          <main
            className={
              justClicked
                ? `${styles.Sidebar_container_item_subheadings} ${styles.open}`
                : styles.Sidebar_container_item_subheadings
            }
          >
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Images
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Icons
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Fonts
            </h6>
            <h6 className={styles.Sidebar_container_item_subheadings_heading}>
              Add New
            </h6>
          </main>
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
            <svg
              className={
                justClicked
                  ? `${styles.Sidebar_container_item_subheadings} ${
                      styles.open
                    }`
                  : styles.Sidebar_container_item_subheadings
              }
            >
              <use xlinkHref={`${sprite}#icon-chevron-small-right`} />
            </svg>
          </h2>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
