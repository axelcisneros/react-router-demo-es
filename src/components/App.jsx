import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Reviews from "./Reviews/Reviews";
import Review from "./Review/Review";
import AboutMe from "./AboutMe/AboutMe";
import AboutUs from "./AboutUs/AboutUs";
import Contact from './AboutMe/Contact';
import Hobbies from './AboutMe/Hobbies';
import MyStory from './AboutMe/MyStory';
import SiteHistory from './AboutUs/SiteHistory';
import SiteMission from './AboutUs/SiteMission';
import PageNotFound from './PageNotFound/PageNotFound';
import "./App.css";
import Header from "./Header/Header";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://emoji-critic.es.tripleten-services.com/v1/reviews').then((res) => {
      return res.json();
    }).then((data) => {
      setReviews(data);
    })
    .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route path="/reviews/:reviewId" element={<Review reviews={reviews} />} />
        <Route path="/about-me" element={<AboutMe />} >
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} >
          <Route path="us-story" element={<SiteHistory />} />
          <Route path="us-mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
