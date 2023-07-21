import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <main className="home">
      <h1>Hello, user123.</h1>
      <span>
        Welcome to the ZombieServer dashboard! Below are some links to get you
        started with your account.
      </span>
      <div className="help">
        <div className="help-card">
          <h2>Choose your outfit</h2>
          <p>
            If you haven't already, you should probably add skins to your
            account. You can do this by clicking{" "}
            <Link to="/dashboard/locker">here</Link> or by clicking the "Locker"
            tab on the side.
          </p>
        </div>
        <div className="help-card">
          <h2>Account Settings</h2>
          <p>
            You may only change your username once per week. You may do this by
            clicking <Link to="/dashboard/account">here</Link> or by going to
            the "My Account" tab on the side.
          </p>
        </div>
        <div className="help-card">
          <h2>Support</h2>
          <p>
            If you need help with anything, please contact us on the official{" "}
            <a href="https://github.com">Github Repository</a>! We will try to
            get back to you as soon as possible.
          </p>
        </div>
      </div>
    </main>
  );
};

export default DashboardHome;
