import { useState, useRef } from "react";
import {
  HiPencil,
  HiEye,
  HiEyeOff,
  HiClipboard,
  HiRefresh,
} from "react-icons/hi";

const DashboardAccount = () => {
  return (
    <main className="account">
      <h1>My Account</h1>
      <span>
        Welcome to account management. Here you can view and manage your account
        and settings.
      </span>
      <div className="settings">
        <div className="settings-row">
          <UsernameSetting />
          <PasswordSetting />
        </div>
        <div className="settings-col">
          <LoginComboSetting />
        </div>
      </div>
      <div className="button-row">
        <button className="default">Save Changes</button>
        <button className="default">Cancel</button>
        <button className="default warning">Delete My Account</button>
      </div>
    </main>
  );
};

const LoginComboSetting = () => {
  const [showLoginCombo, setShowLoginCombo] = useState(false);

  return (
    <div className="setting">
      <h2>Login Combination</h2>
      <div className="text-row">
        <input
          type="text"
          className="default login-combo"
          value={showLoginCombo ? "1029 2392 2018 5719" : "•••• •••• •••• ••••"}
          readOnly
        />
        <button className="setting-button">
          <HiClipboard />
        </button>
        <button className="setting-button">
          <HiRefresh />
        </button>
        <button
          className="setting-button"
          onClick={() => setShowLoginCombo(!showLoginCombo)}
        >
          {showLoginCombo ? <HiEyeOff /> : <HiEye />}
        </button>
      </div>
    </div>
  );
};

const UsernameSetting = () => {
  const [usernameEditable, setUsernameEditable] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);

  return (
    <div className="setting">
      <h2>Username</h2>
      <div className="text-row">
        <input
          ref={usernameRef}
          type="text"
          className="default"
          readOnly={!usernameEditable}
          defaultValue="Username123"
          onBlur={() => setUsernameEditable(false)}
        />
        <button
          onClick={() => {
            setUsernameEditable(true);
            if (usernameRef.current) usernameRef.current.focus();
          }}
          className="setting-button"
        >
          <HiPencil />
        </button>
      </div>
    </div>
  );
};

const PasswordSetting = () => {
  const [passwordEditable, setPasswordEditable] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="setting">
      <h2>Password</h2>
      <div className="text-row">
        <input
          ref={passwordRef}
          type={passwordVisible ? "text" : "password"}
          className="default"
          readOnly={!passwordEditable}
          defaultValue="Username123"
          onBlur={() => setPasswordEditable(false)}
          style={{
            fontSize: passwordVisible ? "1rem" : "1.25rem",
          }}
        />
        <button
          onClick={() => {
            setPasswordEditable(true);
            if (passwordRef.current) passwordRef.current.focus();
          }}
          className="setting-button"
        >
          <HiPencil />
        </button>
        <button
          className="setting-button"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? <HiEyeOff /> : <HiEye />}
        </button>
      </div>
    </div>
  );
};

export default DashboardAccount;
