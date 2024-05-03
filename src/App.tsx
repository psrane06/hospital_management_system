import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  /* return (
    <div className="App">
      <header className="App-header">
        <p>Hospi 2.0</p>
      </header>
      <main>
        <Login />
        <SignUp />
      </main>
    </div>
  ); */
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
