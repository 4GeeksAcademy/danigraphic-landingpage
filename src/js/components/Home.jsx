import React from "react";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <Card title="Card Title 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." />
          <Card title="Card Title 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." />
          <Card title="Card Title 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." />
          <Card title="Card Title 4" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;