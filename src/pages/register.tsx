import { Link } from "react-router-dom";
import { randomString, randomUsername } from "src/utilities/register";

const Register = () => {
  return (
    <div className="page center">
      <div className="dialog">
        <div className="header">
          <h2>Register</h2>
          <span>Create an account to start your experience with ZServer!</span>
        </div>
        <div className="input-container">
          <span className="input-label">Desired Username</span>
          <input
            className="default"
            type="text"
            placeholder={randomUsername()}
          />
        </div>
        <div className="input-container">
          <span className="input-label">Secure Password</span>
          <input
            className="default"
            type="password"
            placeholder={randomString(16)}
          />
        </div>
        <button className="default">Create Account</button>
        <Link to="/login">Already have an account?</Link>
      </div>
    </div>
  );
};

export default Register;
