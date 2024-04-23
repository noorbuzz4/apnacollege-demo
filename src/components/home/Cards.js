import React from "react";
import "./Card.css";
const Cards = () => {
  const cardContent = [
    {
      icon: "https://static-00.iconduck.com/assets.00/map-pin-marker-icon-1490x2048-dim0ohl8.png",
      title: "Development",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.94.12",
    },
    {
      icon: "https://static-00.iconduck.com/assets.00/map-pin-marker-icon-1490x2048-dim0ohl8.png",
      title: "UI/UX Design",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.94.12",
    },
    {
      icon: "https://static-00.iconduck.com/assets.00/map-pin-marker-icon-1490x2048-dim0ohl8.png",
      title: "SEO",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.94.12",
    },
    {
      icon: "https://static-00.iconduck.com/assets.00/map-pin-marker-icon-1490x2048-dim0ohl8.png",
      title: "Digital Marketing ",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.94.12",
    },
    {
      icon: "https://static-00.iconduck.com/assets.00/map-pin-marker-icon-1490x2048-dim0ohl8.png",
      title: "Web Development",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.94.12",
    },
    {
      icon: "https://static-00.iconduck.com/assets.00/map-pin-marker-icon-1490x2048-dim0ohl8.png",
      title: "App Development",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.94.12",
    },
  ];
  return (
    <div className="cards-bg">
      <div className="service-heading-con">
        <h1>Services We Offer</h1>
      </div>
      <div className="card-container">
        {cardContent.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <img className="card-icon" src={item.icon} />
              <div className="card-heading">{item.title}</div>
              <p>{item.para}</p>
              <div>
                <div>
                  <button className=" detail-btn" type="button">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Cards;
