import React from 'react';
import "./services.css";
import bg from "../../assest/services_bg.png"
import ServicesCard from '../../components/services_card/Services_card';

const Services = () => {
  return (
    <div className="services_div" >
      <img src={bg}/>
      <div className='services_body'>
        <h1>OUR SERVICES</h1>
        <p> Welcome to  ON-9 Branding Co.! We provide top-quality graphic design, web development, branding, and marketing services to help businesses grow. Our team of experts delivers unique solutions tailored to your needs, ensuring your brand stands out in the competitive market. Let us help bring your brand to life and take your business to the next level.
        "We are aware that social media is an effective tool for growing businesses and establishing connections with their target market. We're here to help you accomplish your goals by offering you efficient social media marketing strategies."
        </p>
      </div>
      <div className="services_cards">
       
      <ServicesCard heading="Social Media Marketing" content={<ul>
        <li>Customized social media strategy development based on your brand's goals and target audience</li>
        <li>Creation and management of social media accounts on multiple platforms, including but not limited to Facebook, Twitter, Instagram, LinkedIn, and Pinterest</li>
        <li>Creation of compelling social media content (text, images, videos, and more) to engage with your target audience and build your brand's social media presence</li>
        <li>Paid social media advertising management, including targeting and creating ads that align with your business goals and budget </li>
        <li>Social media contest and promotion management to help you build buzz, reward loyal followers, and increase engagement on your social media channels</li>
      
      </ul>}/>
      <ServicesCard heading="Influencer Marketing" content={<ul>
        <li>Identifying and partnering with relevant influencers</li>
        <li>Creating a comprehensive influencer marketing strategy</li>
        <li>Developing and executing influencer campaigns</li>
        <li>Conducting outreach and negotiating contracts with influencers</li>
        <li>Providing guidance on content creation and messaging</li>
        <li>Providing regular reporting and insights to clients</li>
      </ul>} />
      <ServicesCard heading="Search Engine Optimization" content={<ul>
        <li>Conducting in-depth keyword research and analysis</li>
        <li>On-page optimization of website content, including meta tags, header tags, and internal linking structure</li>
        <li>Developing a content strategy that aligns with search intent and is optimized for search engines</li>
        <li>Optimizing website speed and performance</li>
        <li>Providing regular reporting and analysis of website traffic, rankings, and keyword performance</li>
        <li>Building high-quality backlinks through outreach and content creation</li>
      </ul>} />
      <ServicesCard heading="Email Marketing" content={<ul>
        <li>Creating email marketing campaigns that are tailored to the client's brand and audience</li>
        <li>Developing email marketing strategies that align with business goals and target specific segments of the audience</li>
        <li>Designing and coding email templates that are optimized for different devices and email clients</li>
        <li>Building and managing email lists, including segmentation and list hygiene</li>
        <li>Monitoring and analyzing email campaign performance metrics, such as open rates, click-through rates, and conversions</li>
        <li>Integrating email marketing with other digital marketing channels, such as social media and content marketing</li>
      </ul>} />
      <ServicesCard heading="Branding" content={<ul>
        <li>Developing an email branding strategy that aligns with the client's brand identity and goals</li>
        <li>Designing email templates that reflect the client's brand elements, including colors, logos, and typography</li>
        <li>Creating consistent and cohesive email branding across all email campaigns and communication</li>
        <li>Implementing a standardized email signature that reflects the client's brand identity and contact information</li>
        <li>Ensuring that emails are optimized for different devices and email clients to maintain a consistent brand experience</li>
      </ul>} />
     <ServicesCard heading="Graphic Design"content={<ul>
      <li>Creating visual designs that align with the client's brand identity and marketing goals</li>
      <li>Designing marketing collateral such as flyers, brochures, and posters</li>
      <li>Designing digital assets such as social media graphics, website graphics, and email templates</li>
      <li>Producing high-quality print and digital-ready artwork files</li>
      <li>Working collaboratively with the client to ensure that designs meet their needs and vision</li>
     </ul>}/>
      <ServicesCard heading="Web Development" content={<ul>
        <li>Developing responsive, mobile-friendly websites that are optimized for different devices and platforms</li>
        <li>Building websites that are user-friendly, intuitive, and easy to navigate</li>
        <li>Creating custom website designs that align with the client's brand identity and goals</li>
        <li>Developing website functionality, such as forms, shopping carts, and search features</li>
        <li>Integrating website analytics to track website performance and user behavior</li>
      </ul>}/>  
      
        </div>
      </div>
      
      
      
  )
  }
export default Services
