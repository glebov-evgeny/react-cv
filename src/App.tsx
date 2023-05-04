import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import ContactsPage from "./pages/ContactsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
      {loading && <Loader />}
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
