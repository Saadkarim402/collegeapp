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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
`;

const FeatureItem = styled.li`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureLink = styled(Link)`
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: orange;
  }
`;

const GetStartedButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: orange;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: darkorange;
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
            <FeatureContent>
              <h3>Todo List</h3>
              <p>Stay organized by creating and managing your tasks and assignments. Keep track of deadlines and prioritize your work.</p>
              <FeatureLink to="/todo">
                <GetStartedButton>Get Started</GetStartedButton>
              </FeatureLink>
            </FeatureContent>
            <FeatureImage>
              <img src="todo-image.jpg" alt="Todo List" />
            </FeatureImage>
          </FeatureItem>
          <FeatureItem>
            <FeatureContent>
              <h3>Marks Manager</h3>
              <p>Keep track of your academic performance by recording and monitoring your grades. Calculate your overall percentage and evaluate your progress.</p>
              <FeatureLink to="/marks">
                <GetStartedButton>Get Started</GetStartedButton>
              </FeatureLink>
            </FeatureContent>
            <FeatureImage>
              <img src="marks-image.jpg" alt="Marks Manager" />
            </FeatureImage>
          </FeatureItem>
          <FeatureItem>
            <FeatureContent>
              <h3>Attendance Manager</h3>
              <p>Easily track your attendance in classes and receive notifications for upcoming classes or absences. Stay informed about your attendance percentage.</p>
              <FeatureLink to="/attendance">
                <GetStartedButton>Get Started</GetStartedButton>
              </FeatureLink>
            </FeatureContent>
            <FeatureImage>
              <img src="attendance-image.jpg" alt="Attendance Manager" />
            </FeatureImage>
          </FeatureItem>
          <FeatureItem>
            <FeatureContent>
              <h3>Notes App</h3>
              <p>Create and store your class notes in a digital format for easy access and organization. Take notes during lectures and revise them anytime.</p>
              <FeatureLink to="/notes">
                <GetStartedButton>Get Started</GetStartedButton>
              </FeatureLink>
            </FeatureContent>
            <FeatureImage>
              <img src="notes-image.jpg" alt="Notes App" />
            </FeatureImage>
          </FeatureItem>
          <FeatureItem>
            <FeatureContent>
              <h3>Schedule Setter</h3>
              <p>Generate a personalized class schedule and resolve any conflicts. Plan your courses and manage your timetable efficiently.</p>
              <FeatureLink to="/schedule">
                <GetStartedButton>Get Started</GetStartedButton>
              </FeatureLink>
            </FeatureContent>
            <FeatureImage>
              <img src="schedule-image.jpg" alt="Schedule Setter" />
            </FeatureImage>
          </FeatureItem>
          <FeatureItem>
            <FeatureContent>
              <h3>Timetable</h3>
              <p>Visualize your weekly class schedule in a structured format. See all your classes and their timings at a glance.</p>
              <FeatureLink to="/timetable">
                <GetStartedButton>Get Started</GetStartedButton>
              </FeatureLink>
            </FeatureContent>
            <FeatureImage>
              <img src="timetable-image.jpg" alt="Timetable" />
            </FeatureImage>
          </FeatureItem>
          <FeatureItem>
            <FeatureContent>
              <h3>Discussion Forum</h3>
              <p>Engage in academic discussions and collaborate with peers. Share ideas, ask questions, and contribute to the learning community.</p>
              <FeatureLink to="/forum">
                <GetStartedButton>Get Started</GetStartedButton>
              </FeatureLink>
            </FeatureContent>
            <FeatureImage>
              <img src="forum-image.jpg" alt="Discussion Forum" />
            </FeatureImage>
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
