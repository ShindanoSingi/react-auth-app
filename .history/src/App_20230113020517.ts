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

        <Provider store={store}>
        </Provider>

    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}></PersistGate>
          <div>
            <Routes>
              <Route path="/login" element={<Login />} />
              <ProtectedRoute path="/" element={<Profile />}/>
            </Routes>
          </div>
      </PersistGate>
    </Provider>
  );
}

export default App;