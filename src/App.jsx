import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CreateRequest from "./components/CreateRequest";
import AppLayout from "./components/layout/AppLayout";
import ProtectedRoute from "./components/common/ProtectedRoute";


function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* We don't want to show Sidebar and Header on Login page */}
          <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        {/* Routes that need Sidebar and Header */}
          <Route path="/createRequest" element={<CreateRequest />} />
        </Route>

      </Routes>
  );
}

export default App;
