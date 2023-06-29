import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const NoteList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const AddNoteButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const AddNoteForm = styled.div`
  margin-top: 20px;
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  flex-wrap: wrap;
  align-items: center;

  & > input[type='text'],
& > input[type='date'],
& > input[type='time'] {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 14px;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
  }
  &:hover {
    border-color: blue;
  }
}

  & > textarea {
    flex-grow: 1;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
    font-size: 14px;
    width: 100%;

    @media (min-width: 600px) {
      width: auto;
    }
  }

  & > button {
    background-color: #2196f3;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 3px;
    font-size: 14px;

    &:hover {
      background-color: #1976d2;
    }
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  width: 100%;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

const NoteTitle = styled.h3`
  margin-bottom: 5px;
  color: #333;
`;

const NoteDescription = styled.textarea`
  margin-bottom: 5px;
  width: 100%;
  height: 100px;
  resize: none;
  color: #555;
`;

const Button = styled.button`
  background-color: ${props => (props.danger ? '#f44336' : '#4caf50')};
  color: white;
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;

  &:hover {
    background-color: ${props => (props.danger ? '#d32f2f' : '#45a049')};
  }
`;

const EditButton = styled(Button)`
  background-color: #2196f3;

  &:hover {
    background-color: #1976d2;
  }
`;

const Background = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', date: '', time: '', description: '' });
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedNote, setEditedNote] = useState({ title: '', date: '', time: '', description: '' });

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (editIndex !== null) {
      setEditedNote({
        ...editedNote,
        [name]: value,
      });
    } else {
      setNewNote({
        ...newNote,
        [name]: value,
      });
    }
  };

  const handleAddNote = () => {
    if (newNote.title.trim() !== '' && newNote.date.trim() !== '' && newNote.time.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote({ title: '', date: '', time: '', description: '' });
    }
  };

  const handleEditNote = index => {
    setEditIndex(index);
    setEditedNote(notes[index]);
  };

  const handleSaveNote = index => {
    const updatedNotes = [...notes];
    updatedNotes[index] = editedNote;
    setNotes(updatedNotes);
    setEditIndex(null);
    setEditedNote({ title: '', date: '', time: '', description: '' });
  };

  const handleDeleteNote = index => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    if (editIndex === index) {
      setEditIndex(null);
      setEditedNote({ title: '', date: '', time: '', description: '' });
    }
  };

  return (
    <Background>
      <Container>
        <Heading>Notes App</Heading>
        <NoteList>
          {notes.map((note, index) => (
            <Card key={index}>
              {index === editIndex ? (
                <>
                  <NoteTitle>{note.title}</NoteTitle>
                  <NoteDescription
                    name="description"
                    value={editedNote.description}
                    onChange={handleInputChange}
                    placeholder="Edit the description"
                  />
                  <input
                    type="date"
                    name="date"
                    value={editedNote.date}
                    onChange={handleInputChange}
                  />
                  <input
                    type="time"
                    name="time"
                    value={editedNote.time}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <>
                  <NoteTitle>{note.title}</NoteTitle>
                  <NoteDescription value={note.description} readOnly />
                  <p>
                    {note.date} - {note.time}
                  </p>
                </>
              )}
              <div>
                {index === editIndex ? (
                  <>
                    <Button onClick={() => handleSaveNote(index)}>Save</Button>
                    <Button onClick={() => setEditIndex(null)} danger>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <EditButton onClick={() => handleEditNote(index)}>Edit</EditButton>
                    <Button onClick={() => handleDeleteNote(index)} danger>
                      Delete
                    </Button>
                  </>
                )}
              </div>
            </Card>
          ))}
        </NoteList>
        {!showAddNoteForm && (
          <AddNoteButton onClick={() => setShowAddNoteForm(true)}>Add Note</AddNoteButton>
        )}
        {showAddNoteForm && (
          <AddNoteForm isVisible={showAddNoteForm}>
            <input
              type="text"
              name="title"
              value={newNote.title}
              onChange={handleInputChange}
              placeholder="Enter a title"
            />
            <NoteDescription
              name="description"
              value={newNote.description}
              onChange={handleInputChange}
              placeholder="Enter a description"
            />
            <input type="date" name="date" value={newNote.date} onChange={handleInputChange} />
            <input type="time" name="time" value={newNote.time} onChange={handleInputChange} />
            <Button onClick={handleAddNote}>Add Note</Button>
          </AddNoteForm>
        )}
      </Container>
    </Background>
  );
}

export default App;
