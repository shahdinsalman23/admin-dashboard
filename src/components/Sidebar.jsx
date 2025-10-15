import React from "react";
import { sidebarData } from "../data/Data";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="sidebar-header">
         <Link to="/"><h2 className="logo">Shahdin</h2></Link>
          <button className="sidebar-close-btn" onClick={toggleSidebar}><FiX size={22} /></button>
      </div>

      <div className="sidebar-sections">
        {sidebarData.map((section, index) => (
          <div key={index} className="sidebar-section">
            <h4 className="sidebar-heading">{section.heading}</h4>
            <ul className="sidebar-menu">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className="sidebar-item">
                    <Link to={item.path} className="sidebar-link">
                      <span className="sidebar-icon"><Icon /></span>
                      <span className="sidebar-text">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
