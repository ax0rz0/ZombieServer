import { Link } from "react-router-dom";

import "src/styles/pages/main.css";

const Main = () => {
  return (
    <>
      <div className="page">
        <h1>ZombieServer</h1>
        <p>
          The best OG Fortnite Backend Server currently available, all open
          source!
        </p>
        <div className="buttonRow">
          <Link to="/register">
            <button className="default">Create an Account</button>
          </Link>
          <Link to="/login">
            <button className="default">Log In to an existing Account</button>
          </Link>
          <Link to="/dashboard">
            <button className="default">Test Dashboard</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
