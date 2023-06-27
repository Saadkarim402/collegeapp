import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #e9e9e9; /* Replace with your desired background color */
`;

const Header = styled.h1`
  margin-bottom: 20px;
  color: #333; /* Replace with your desired color */
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
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;

const SubjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const SubjectCard = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const SubjectName = styled.h3`
  font-weight: 600;
`;

const MarkInput = styled.input`
  padding: 8px;
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
`;

const MarksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MarkItem = styled.li`
  margin-bottom: 8px;
`;

const MarksWrapper = styled.div`
  margin-top: 10px;
`;

const MarksLabel = styled.label`
  margin-right: 10px;
`;

const MarksInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
`;

const Percentage = styled.p`
  margin-top: 10px;
  font-size: 18px;
`;

const App = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [marks, setMarks] = useState([]);
  const [totalMarks, setTotalMarks] = useState('');

  const handleSubjectInputChange = (event) => {
    setNewSubject(event.target.value);
  };

  const handleAddSubject = (event) => {
    event.preventDefault();
    if (newSubject.trim() !== '') {
      const subject = {
        id: subjects.length + 1,
        name: newSubject,
        marksObtained: 0,
      };
      setSubjects([...subjects, subject]);
      setNewSubject('');
    }
  };

  const handleMarkInputChange = (event, subjectId) => {
    const markValue = parseInt(event.target.value, 10) || 0;
    const updatedMarks = marks.filter((mark) => mark.subjectId !== subjectId);
    if (markValue > 0) {
      const mark = {
        subjectId,
        value: markValue,
      };
      setMarks([...updatedMarks, mark]);
    } else {
      setMarks(updatedMarks);
    }
  };

  const calculateTotalMarks = () => {
    let total = 0;
    marks.forEach((mark) => {
      total += mark.value;
    });
    return total;
  };

  const calculatePercentage = () => {
    const totalMarks = calculateTotalMarks();
    if (totalMarks > 0) {
      const marksObtained = subjects.reduce((sum, subject) => {
        const subjectMarks = marks.filter((mark) => mark.subjectId === subject.id);
        if (subjectMarks.length > 0) {
          return sum + subjectMarks.reduce((sum, mark) => sum + mark.value, 0);
        }
        return sum;
      }, 0);
      return ((marksObtained / totalMarks) * 100).toFixed(2);
    }
    return 'N/A';
  };

  return (
    <AppContainer>
      <Header>Marks Management</Header>
      <SubjectForm onSubmit={handleAddSubject}>
        <InputField
          type="text"
          placeholder="Enter subject name"
          value={newSubject}
          onChange={handleSubjectInputChange}
        />
        <AddButton type="submit">Add Subject</AddButton>
      </SubjectForm>
      <SubjectList>
        {subjects.map((subject) => (
          <SubjectCard key={subject.id}>
            <SubjectName>{subject.name}</SubjectName>
            <MarkInput
              type="number"
              placeholder="Enter mark"
              min="0"
              max="100"
              onChange={(event) => handleMarkInputChange(event, subject.id)}
            />
            <MarksList>
              {marks
                .filter((mark) => mark.subjectId === subject.id)
                .map((mark, index) => (
                  <MarkItem key={index}>{mark.value}</MarkItem>
                ))}
            </MarksList>
            <MarksWrapper>
              <MarksLabel>Total Marks:</MarksLabel>
              <MarksInput
                type="number"
                min="0"
                value={totalMarks}
                onChange={(event) => setTotalMarks(event.target.value)}
              />
            </MarksWrapper>
            <Percentage>
              Percentage: {calculatePercentage()}%
            </Percentage>
          </SubjectCard>
        ))}
      </SubjectList>
    </AppContainer>
  );
};

export default App;
