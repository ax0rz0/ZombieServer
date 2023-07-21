import React from "react";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";

import "src/styles/pages/dashboard.css";
import DashboardHome from "./dashboard/home";
import DashboardAccount from "./dashboard/account";
import DashboardLocker from "./dashboard/locker";

const Dashboard = () => {
  return (
    <div className="page dash">
      <div className="dashboard-links">
        <div className="user-section">
          <div className="user-info">
            <span>Username123</span>
            <small>b4d8bba9cfc7443e9b551a4eb71ab2d0</small>
          </div>
        </div>
        {/* <h3>ZombieServer</h3> */}
        <div className="divider"></div>
        <Links />
        <button className="warning">Log Out</button>
      </div>

      <div className="dashboard-links-mobile">
        <div className="container">
          <Links />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/locker" element={<DashboardLocker />} />
        <Route path="/account" element={<DashboardAccount />} />
      </Routes>
    </div>
  );
};

const Links = () => (
  <>
    <MyLink text="Dashboard" path="/dashboard" />
    <MyLink text="My Account" path="/dashboard/account" />
    <MyLink text="Locker" path="/dashboard/locker" />
    <div className="end" />
    <MyLink text="Go Back" path="/" />
  </>
);

const MyLink = (props: {
  text: string;
  path: string;
  icon?: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameWithoutSlash = location.pathname
    .split("")
    .filter((char) => char !== "/")
    .join("");
  const toWithoutSlash = props.path
    .split("")
    .filter((char) => char !== "/")
    .join("");

  return (
    <button
      className={
        pathnameWithoutSlash === toWithoutSlash ? "selected link" : "link"
      }
      onClick={() => navigate(props.path)}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Dashboard;
