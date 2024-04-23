import React from "react";
import "./Choose.css";
const Choose = () => {
  const chooseContent = [
    {
      icon: "https://www.freeiconspng.com/uploads/green-rss-feed-icon-png-32.png",
      title: "Quality",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.94.12",
    },
    {
      icon: "https://www.freeiconspng.com/uploads/green-rss-feed-icon-png-32.png",
      title: "Quality",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.94.12",
    },
    {
      icon: "https://www.freeiconspng.com/uploads/green-rss-feed-icon-png-32.png",
      title: "Quality",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.94.12",
    },
  ];
  return (
    <>
      <div className="choose-container">
        <h1 className="choose-heading" style={{ color: "white" }}>
          Why Choose Us ?
        </h1>
      </div>
      <div className="bg-choose " >
        <div style={{ display: "flex", justifyContent: "space-around" }} >
          {chooseContent.map((item, index) => (
            <div style={{ textAlign: "center" ,background:"rgb(15, 15, 15)", padding:"2rem 3.3rem", borderRadius:"100%"}} >
              <img
                className="choose-icon"
                src={item.icon}
              ></img>
              <div style={{ fontSize: "23px", fontWeight: "500" , marginTop:"10px" }}>Quality</div>
         
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Choose;
