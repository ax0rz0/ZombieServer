import { Routes, Route } from "react-router-dom";
import { useDataStore } from "src/utilities/store";

import Register from "../pages/register";
import LogIn from "src/pages/login";
import Main from "src/pages/main";
import Dashboard from "src/pages/dashboard";
import Frame from "./frame";
import Banner from "./banner";

const App = () => {
  const fetchData = useDataStore((state) => state.fetchData);
  fetchData(true);

  return (
    <Frame>
      <Banner />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<>404</>} />
      </Routes>
    </Frame>
  );
};

export default App;
