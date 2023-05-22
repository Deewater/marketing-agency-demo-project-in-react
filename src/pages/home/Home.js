import React from "react";
import "./home.css";
import bg from "../../assest/bg2.png";
import { Card } from "../../components/card/Card";
import digitalmarketing from "../../assest/digital.jpg";
import graphicdesign from "../../assest/graphicdesign.jpg";
import branding from "../../assest/branding.jpg";
import webdev from "../../assest/webdev.jpg";


const Home = () => {
  return (
    <div className="HeroSection">
      <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
        
      </div>
      <div className="firstpara">
      
        <h1>Welcome to our website, where creativity meets technology!</h1>
        <p>
         
          We are a team of passionate designers, developers, and marketers,
          dedicated to helping businesses succeed in the digital world. Whether
          you are looking to design a beautiful website, develop a powerful
          e-commerce platform, or launch a successful digital marketing
          campaign, we have the skills and expertise to make it happen.
        </p>
      </div>
      <div className="services">
        <h1>Our services</h1>
        <hr />
        <div className="cards">
          <div>
            <Card
              img={digitalmarketing}
              heading="Digital Marketing"
              content="Welcome to our digital marketing services! We specialize in helping businesses achieve their online marketing goals through SEO, PPC, social media, and content marketing. Let us help you increase your online visibility and boost your bottom line."
            />
          </div>
          <div>
            <Card
              img={graphicdesign}
              heading="Graphic Designing"
              content="Creative and professional graphic design services for businesses and individuals. Let's work together to bring your ideas to life with stunning visuals that make an impact."
            />
          </div>
          <div>
            <Card
              img={branding}
              heading="Branding"
              content="Crafting brands that stand out in a crowded marketplace. From brand strategy to visual identity design, We work with you to create a cohesive and memorable brand that resonates with your target audience."
            />
          </div>

          <div>
            <Card
              img={webdev}
              heading="web Development"
              content="Expert web development services that deliver beautiful and functional websites. I build responsive and user-friendly websites that are optimized for search engines, giving your business a strong online presence and a competitive edge."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
