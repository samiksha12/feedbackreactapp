import "./App.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Login from "./components/Login";
import { UserContext } from "./components/context/UserContext";
import { useContext } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./components/FeedbackData";
import Footer from "./components/Footer";
// import FeedbackUserData from "./components/FeedbackUserData";

function App() {
  const { token } = useContext(UserContext);

  return (
    <div className="holder">
      {token &&<Header text="Feedback React App" headerClass="header-main">
      <div className="p-2 mx-2">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="p-2 mx-2">
          <NavLink to="about">About</NavLink>
        </div>
        <div className="p-2 mx-2">
          <NavLink to="contact-us">Contact-Us</NavLink>
        </div>
        <div className="p-2 mx-2">
          <NavLink to="feedbackdata">Feedbacks</NavLink>
        </div>
      </Header>}
      <div className="body">
      <Routes>
        {!token ? (
          <Route path="/" element={<Login />}></Route>
        ) : (
          <>
            <Route path="/" element={<FeedbackForm />}></Route>
            <Route path="/feedbackdata" element={<FeedbackData />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact-us" element={<ContactUs />}></Route>
          </>
        )}
        <Route path="*" element={<Login />} />
      </Routes>
      </div>
      {token &&<Footer footerClass="footer-main p-3" text="Feedback App Footer"/>}
    </div>
  );
}

export default App;
