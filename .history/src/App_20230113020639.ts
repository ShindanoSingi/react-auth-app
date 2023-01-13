import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
// import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
    return (
          <div>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
  );
}

export default App;