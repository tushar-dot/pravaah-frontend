import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CreateRequest from "./components/CreateRequest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/createRequest" element={<CreateRequest />} />
    </Routes>
  );
}

export default App;
