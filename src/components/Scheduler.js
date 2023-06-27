import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePageContainer = styled.div`
  background: #f2f2f2;
  padding: 20px;
`;

const SectionContainer = styled.div`
  margin-bottom: 30px;
`;

const UserInfoSection = styled(SectionContainer)`
  background: white;
  padding: 20px;
`;

const UserInfoTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const UserInfoContent = styled.p`
  font-size: 18px;
`;

const FeatureSection = styled(SectionContainer)`
  background: white;
  padding: 20px;
`;

const FeatureTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;



const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const FeatureItem = styled.li`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FeatureLink = styled(Link)`
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: orange;
  }
`;

const FooterContainer = styled.footer`
  background: #333;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
`;

function HomePage() {
  return (
    <HomePageContainer>
      <SectionContainer>
        <Heading>Welcome to College App</Heading>
        <p>
          College App is a comprehensive platform designed to enhance your college experience
          by providing various features and tools for students and faculty members.
        </p>
      </SectionContainer>
      <UserInfoSection>
        <UserInfoTitle>User Information</UserInfoTitle>
        <UserInfoContent>
          Welcome, John Doe! You are currently logged in as a student.
        </UserInfoContent>
      </UserInfoSection>
      <FeatureSection>
        <FeatureTitle>Key Features</FeatureTitle>
        <FeatureList>
          <FeatureItem>
            <FeatureLink to="/todo">Todo List</FeatureLink>: Stay organized by creating and managing your tasks and assignments.
          </FeatureItem>
          <FeatureItem>
            <FeatureLink to="/marks">Marks Manager</FeatureLink>: Keep track of your academic performance by recording and monitoring your grades.
          </FeatureItem>
          <FeatureItem>
            <FeatureLink to="/attendance">Attendance Manager</FeatureLink>: Easily track your attendance in classes and receive notifications for upcoming classes or absences.
          </FeatureItem>
          <FeatureItem>
            <FeatureLink to="/notes">Notes App</FeatureLink>: Create and store your class notes in a digital format for easy access and organization.
          </FeatureItem>
          <FeatureItem>
            <FeatureLink to="/schedule">Schedule Setter</FeatureLink>: Generate a personalized class schedule and resolve any conflicts.
          </FeatureItem>
          <FeatureItem>
            <FeatureLink to="/timetable">Timetable</FeatureLink>: Visualize your weekly class schedule in a structured format.
          </FeatureItem>
          <FeatureItem>
            <FeatureLink to="/forum">Discussion Forum</FeatureLink>: Engage in academic discussions and collaborate with peers.
          </FeatureItem>
        </FeatureList>
      </FeatureSection>
      <FooterContainer>
        <p>&copy; 2023 College App. All rights reserved.</p>
      </FooterContainer>
    </HomePageContainer>
  );
}

export default HomePage;
