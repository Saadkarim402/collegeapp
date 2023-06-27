import React, { useState } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  text-align: center;
  padding: 20px;
`;

const Header = styled.h1`
  margin-bottom: 20px;
`;

const SubjectForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 16px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const SubjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SubjectCard = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubjectName = styled.h3`
  margin-bottom: 10px;
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const CounterLabel = styled.span`
  margin-right: 5px;
`;

const CounterButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;

const ProgressBarWrapper = styled.div`
  width: 100px;
  height: 20px;
  position: relative;
  margin: 10px auto;
  background-color: #e0e0e0;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 20px;
  background-color: ${(props) =>
    props.percentage >= 75 ? "#4caf50" : props.percentage >= 50 ? "#ffc107" : "#f44336"};
  transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
`;



const App = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');

  const handleInputChange = (event) => {
    setNewSubject(event.target.value);
  };

  const handleAddSubject = (event) => {
    event.preventDefault();
    if (newSubject.trim() !== '') {
      const subject = {
        id: subjects.length + 1,
        name: newSubject,
        totalClasses: 0,
        classesAttended: 0,
        percentage: 0,
      };
      setSubjects([...subjects, subject]);
      setNewSubject('');
    }
  };

  const handleIncreaseTotalClasses = (subject) => {
    const updatedSubjects = subjects.map((item) => {
      if (item.id === subject.id) {
        const updatedTotalClasses = item.totalClasses + 1;
        const updatedPercentage =
          parseFloat(
            ((item.classesAttended / updatedTotalClasses) * 100).toFixed(2)
          ) || 0;

        return {
          ...item,
          totalClasses: updatedTotalClasses,
          percentage: updatedPercentage,
        };
      }
      return item;
    });
    setSubjects(updatedSubjects);
  };

  const handleDecreaseTotalClasses = (subject) => {
    const updatedSubjects = subjects.map((item) => {
      if (item.id === subject.id) {
        const updatedTotalClasses =
          item.totalClasses > 0 ? item.totalClasses - 1 : 0;
        const updatedPercentage =
          parseFloat(
            ((item.classesAttended / updatedTotalClasses) * 100).toFixed(2)
          ) || 0;

        return {
          ...item,
          totalClasses: updatedTotalClasses,
          percentage: updatedPercentage,
        };
      }
      return item;
    });
    setSubjects(updatedSubjects);
  };

  const handleIncreaseClassesAttended = (subject) => {
    const updatedSubjects = subjects.map((item) => {
      if (item.id === subject.id) {
        const updatedClassesAttended =
          item.classesAttended < item.totalClasses
            ? item.classesAttended + 1
            : item.classesAttended;
        const updatedPercentage =
          parseFloat(
            ((updatedClassesAttended / item.totalClasses) * 100).toFixed(2)
          ) || 0;

        return {
          ...item,
          classesAttended: updatedClassesAttended,
          percentage: updatedPercentage,
        };
      }
      return item;
    });
    setSubjects(updatedSubjects);
  };

  const handleDecreaseClassesAttended = (subject) => {
    const updatedSubjects = subjects.map((item) => {
      if (item.id === subject.id) {
        const updatedClassesAttended =
          item.classesAttended > 0 ? item.classesAttended - 1 : 0;
        const updatedPercentage =
          parseFloat(
            ((updatedClassesAttended / item.totalClasses) * 100).toFixed(2)
          ) || 0;

        return {
          ...item,
          classesAttended: updatedClassesAttended,
          percentage: updatedPercentage,
        };
      }
      return item;
    });
    setSubjects(updatedSubjects);
  };

  return (
    <StyledApp>
      <Header>Attendance Tracker</Header>
      <SubjectForm onSubmit={handleAddSubject}>
        <InputField
          type="text"
          placeholder="Enter subject name"
          value={newSubject}
          onChange={handleInputChange}
        />
        <AddButton type="submit">Add Subject</AddButton>
      </SubjectForm>
      <SubjectList>
        {subjects.map((subject) => (
          <SubjectCard key={subject.id}>
            <SubjectName>{subject.name}</SubjectName>
            <CounterWrapper>
              <CounterLabel>Total Classes:</CounterLabel>
              <CounterButton
                onClick={() => handleDecreaseTotalClasses(subject)}
              >
                -
              </CounterButton>
              <span>{subject.totalClasses}</span>
              <CounterButton
                onClick={() => handleIncreaseTotalClasses(subject)}
              >
                +
              </CounterButton>
              <CounterLabel>Classes Attended:</CounterLabel>
              <CounterButton
                onClick={() => handleDecreaseClassesAttended(subject)}
              >
                -
              </CounterButton>
              <span>{subject.classesAttended}</span>
              <CounterButton
                onClick={() => handleIncreaseClassesAttended(subject)}
              >
                +
              </CounterButton>
            </CounterWrapper>
            <ProgressBarWrapper>
              <ProgressBar percentage={subject.percentage} />
            </ProgressBarWrapper>
            <CounterLabel>Percentage: {subject.percentage}%</CounterLabel>
          </SubjectCard>
        ))}
      </SubjectList>
    </StyledApp>
  );
};

export default App;
