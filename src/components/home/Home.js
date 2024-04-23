import React from "react";
import "./Home.css";
import Choose from "./Choose";
import Cards from "./Cards";
import Button from "../../comp/Button";

const Home = () => {
  return (
    <>
      <div className="bg-hero"></div>
      <div className="bg-text">
        <div className="hero-hading">Yours Digital Solutions</div>
        <p className="hero-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
         <div className="" style={{display:"flex", justifyContent:"end"}}>
        <Button label={"Explore More"} />
        </div>
      </div>
      <Cards />
      <Choose/>
   
    </>
  );
};

export default Home;
