import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/login";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
