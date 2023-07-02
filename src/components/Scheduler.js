import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";


const features = [
  {
    name: "Feature 1",
    details: "This is the description of Feature 1."
  },
  {
    name: "Feature 2",
    details: "This is the description of Feature 2."
  },
  {
    name: "Feature 3",
    details: "This is the description of Feature 3."
  },
  {
    name: "Feature 4",
    details: "This is the description of Feature 4."
  }
];

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const CarouselContainer = styled.div`
  

  .carousel .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    background-color: ${() => getRandomColor()};
  }

  .carousel .control-dots {
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .carousel .control-dots .dot {
    background-color: #ccc;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }

  .carousel .control-dots .dot.selected {
    background-color: #000;
  }

  .carousel .control-prev,
  .carousel .control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 8px;
    font-size: 20px;
    cursor: pointer;
  }

  

  .carousel .carousel-status {
    display: none;
  }
`;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const renderSlides = features.map((feature, index) => (
    <div key={index}>
      <h2>{feature.name}</h2>
      <p>{feature.details}</p>
    </div>
  ));

  const Info=styled.div`
/* background-color: antiquewhite; */
margin-top: 40px;
max-width: 60%;

`

const Imj=styled.div`
/* background-color: aquamarine; */

`

const HomeContainer = styled.div`
  padding: 70px;
  text-align: center;
  background-color: black;
  display: flex;
  align-items: center;
  margin-bottom: 0%;
  
`;

const AppTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  
`;

const AppDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
  padding-bottom: 40px;
`;

const ExploreButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fca311;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e57600;
  }
`;

const FooterContainer = styled.footer`
  background-color: black;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: white;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


const AboutContainer = styled.section`
  background-color: black;
  padding: 40px;
`;

const AboutTitle = styled.h2`
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 16px;
  color: white;
  line-height: 1.5;
`;

const ProfileLinks = styled.div`
  margin-top: 20px;
`;

const ProfileLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;


  return (
    <>
    
    <HomeContainer>
    <Info>
    <AppTitle>Bithub</AppTitle>
    <AppDescription>
      Welcome to Bithub, your ultimate student companion app! Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Ut non lectus ut mauris
      ullamcorper fermentum. Nunc eget orci non nisi lacinia interdum.
    </AppDescription>
    <ExploreButton>Explore</ExploreButton>
    </Info>
    <Imj>
      <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwC1hnl00aniV_S-tcbR2_SKERFBv0ASnet48EUpaqJmtN0YO1"width="400" height="300" alt="Image"></img>
    </Imj>
  </HomeContainer>

    <AppContainer>
      <CarouselContainer>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          selectedItem={currentIndex}
          onChange={handleChange}
          className="carousel-container"
          renderIndicator={(onClickHandler, isSelected, index) => (
            <div
              className={`dot ${isSelected ? "selected" : ""}`}
              onClick={onClickHandler}
            ></div>
          )}
        >
          {renderSlides}
        </Carousel>
      </CarouselContainer>
    </AppContainer>

    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        Hi, I'm Saad Karim, the founder of this app. I have always been passionate about technology and how it can improve people's lives. As a developer and entrepreneur, I wanted to create a platform that solves real-world problems and enhances the user experience.
      </AboutText>
      <AboutText>
        With this app, my aim is to provide a seamless and intuitive solution that meets the needs of our users. I believe in the power of innovation and constantly strive to incorporate the latest technologies and best practices into our products.
      </AboutText>
      <AboutText>
        Thank you for being a part of our journey. We are dedicated to delivering a high-quality app that makes a positive impact on your life. Feel free to reach out to us if you have any questions, suggestions, or feedback.
      </AboutText>
      <ProfileLinks>
        <ProfileLink href="https://www.linkedin.com/in/saadkarim" target="_blank" rel="noopener noreferrer">LinkedIn</ProfileLink>
        <ProfileLink href="https://github.com/saadkarim" target="_blank" rel="noopener noreferrer">GitHub</ProfileLink>
        <ProfileLink href="https://twitter.com/saadkarim" target="_blank" rel="noopener noreferrer">Twitter</ProfileLink>
      </ProfileLinks>
    </AboutContainer>

    <FooterContainer>
      <FooterText>© 2023 Bit Hub. All rights reserved.</FooterText>
      <FooterText>
        <FooterLink href="/privacy">Privacy Policy</FooterLink> |{' '}
        <FooterLink href="/terms">Terms of Service</FooterLink> |{' '}
        <FooterLink href="/contact">Contact Us</FooterLink>
      </FooterText>
    </FooterContainer>


    



    </>
  );
}
