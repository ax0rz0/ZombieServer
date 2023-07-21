import { Routes, Route } from "react-router-dom";
import { useDataStore } from "src/utilities/store";

import Register from "../pages/register";
import LogIn from "src/pages/login";
import Main from "src/pages/main";
import Dashboard from "src/pages/dashboard";
import Frame from "./frame";
import Banner from "./banner";

interface window {
  __TAURI__: any;
}

const App = () => {
  const fetchData = useDataStore((state) => state.fetchData);
  fetchData(true);

  const isTauri = (window as any as window).__TAURI__ !== undefined;
  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

  if (isTauri)
    return (
      <Frame>
        <Layout />
      </Frame>
    );

  if (isFirefox) return <FireFoxWarning />;

  return <Layout />;
};

const Layout = () => {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<>404</>} />
      </Routes>
    </>
  );
};

const FireFoxWarning = () => {
  return (
    <div className="page center">
      <div className="dialog">
        <div className="header">
          <h2>Unsupported Browser</h2>
          <span>
            This application is only supported on Chromium based browsers.
            Please consider using a different browser.
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
