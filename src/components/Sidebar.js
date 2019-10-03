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
  appsHeadings,
  iconSet
} from "../utils/headings";

const Sidebar = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    window.addEventListener("resize", e => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });

    return () =>
      window.removeEventListener("resize", () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      });
  }, []);

  return (
    <aside className={styles.Sidebar}>
      {windowSize.width <= 700 ? (
        <div className={styles.Sidebar_mobileContainer}>
          <svg className={styles.Sidebar_mobile}>
            <use xlinkHref={`${sprite}#icon-menu`} />
          </svg>
        </div>
      ) : (
        <h2
          className={styles.Sidebar_heading}
          style={{ color: "#eee", fontWeight: "400" }}
        >
          Dashboard
        </h2>
      )}
      <hr className={styles.Sidebar_divider} />

      {/* SIDENAV MENU CONTAINER */}
      <div className={styles.Sidebar_container}>
        {/* COMPONENTS SECTION */}
        <div className={styles.Sidebar_container_item}>
          {/* MAIN: SIDEBARITEM COMPONENT GOES HERE... */}
          <SidebarItem
            heading="Components"
            subheadings={componentHeadings}
            icon={iconSet.components}
          />
        </div>

        {/* STYLE GUIDE SECTION */}
        <div className={styles.Sidebar_container_item}>
          <SidebarItem
            heading="Style Guide"
            subheadings={styleguideHeadings}
            icon={iconSet.styleGuide}
          />
        </div>
        {/* BUG TRACKER SECTION */}
        <div className={styles.Sidebar_container_item}>
          <SidebarItem
            heading="Bug Tracker"
            subheadings={bugtrackerHeadings}
            icon={iconSet.bugTracker}
          />
        </div>

        {/* UTILS SECTION */}
        <div className={styles.Sidebar_container_item}>
          <SidebarItem
            heading="Utilities"
            subheadings={utilsHeadings}
            icon={iconSet.utilities}
          />
        </div>

        {/* DATA VIZ */}
        <div className={styles.Sidebar_container_item}>
          <SidebarItem
            heading="Data Viz"
            subheadings={datavizHeadings}
            icon={iconSet.dataViz}
          />
        </div>

        {/* TEMPLATES SECTION */}
        <div className={styles.Sidebar_container_item}>
          <SidebarItem
            heading="Templates"
            subheadings={templatesHeadings}
            icon={iconSet.templates}
          />
        </div>
        {/* ASSETS SECTION */}
        <div className={styles.Sidebar_container_item}>
          <SidebarItem
            heading="Assets"
            subheadings={assetsHeadings}
            icon={iconSet.assets}
          />
        </div>
        {/* TAGS SECTION */}
        <div
          className={styles.Sidebar_container_item}
          style={{ marginBottom: "4rem" }}
        >
          <SidebarItem
            heading="Tags"
            subheadings={tagsHeadings}
            icon={iconSet.tags}
          />
        </div>

        {/* APPS SECTION */}
        <div className={styles.Sidebar_container_item}>
          <SidebarItem
            heading="Apps"
            subheadings={appsHeadings}
            icon={iconSet.apps}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
