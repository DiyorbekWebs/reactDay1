import React from "react";
import { image1, image2, image3 } from "../../assets";
import Card from "../Card";
import './main.css'

const Services = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="titles">
            <p className="paragraf">Services</p>
            <h1 className="title">
              Design that solves problems, one product at a time.
            </h1>
          </div>
          <ul className="list">
            <Card
              img={image1}
              title={"What I can do for you"}
              parag={"Faster, better products that your users love. Here's all the services I provide:"}
              li1={"Design Strategy"}
              li2={"Web and Mobile App Design"}
              li3={"Front-end Development"}
            />
            <Card
              img={image2}
              title={"Applications I'm fluent in"}
              parag={"Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."}
              li1={"Sketch"}
              li2={"Webflow"}
              li3={"Figma"}
            />
            <Card
              img={image3}
              title={"What you can expect"}
              parag={"I design products that are more than pretty. I make them shippable and usable."}
              li1={"Clean and functional"}
              li2={"Device and user friendly"}
              li3={"Efficient and maintainable"}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
