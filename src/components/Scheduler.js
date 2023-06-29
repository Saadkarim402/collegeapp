import React from 'react';
import styled from 'styled-components';

const Info=styled.div`
/* background-color: antiquewhite; */
margin-top: 40px;
max-width: 60%;

`

const Imj=styled.div`
/* background-color: aquamarine; */

`

const HomeContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: blueviolet;
  display: flex;
  align-items: center;
  
`;

const AppTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
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

const HomePage = () => {
  return (
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
        <h1>jasdasdasdadasdaasdasdasdasdasdasdsdasdasdad</h1>
      </Imj>
      
    </HomeContainer>
  );
};

export default HomePage;
