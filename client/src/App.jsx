import { Route, Routes, Navigate } from "react-router-dom";
import AppContainer from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  //check if token is already present in the local storage to authenticate the user,
  //if token is present user is redirected to dashboard
  //if not user is redirected to login page
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<AppContainer />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
