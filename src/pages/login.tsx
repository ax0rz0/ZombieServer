import { Link } from "react-router-dom";
import { randomString, randomUsername } from "src/utilities/register";

const LogIn = () => {
  return (
    <div className="page center">
      <div className="dialog">
        <div className="header">
          <h2>Log In</h2>
          <span>Log in to your account to view your ZServer statistics!</span>
        </div>
        <div className="input-container">
          <span className="input-label">Username</span>
          <input
            className="default"
            type="text"
            placeholder={randomUsername()}
          />
        </div>
        <div className="input-container">
          <span className="input-label">Password</span>
          <input
            className="default"
            type="password"
            placeholder={randomString(16)}
          />
        </div>
        <button className="default">Go to Dashboard</button>
        <Link to="/register">Need an account?</Link>
      </div>
    </div>
  );
};

export default LogIn;
