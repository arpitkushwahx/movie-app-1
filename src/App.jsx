import { useState, useContext, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import MovieContextProvider from "./context/MovieContextProvider";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewItems from "./components/NewItems";
import RecentUpdate from "./components/RecentUpdate";
import ExpectedPremiere from "./components/ExpectedPremiere";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Layout from "./components/Layout";
import NoPage from "./components/no pgae/NoPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";
import Search from "./components/search/Search";
import SignIn from "./components/signin/SignIn";
import Carousel from "./components/carousel/Carousel";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  // const {data, error} = useMovie();

  return (
    <div className="bg-gray-900 h-auto">
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
