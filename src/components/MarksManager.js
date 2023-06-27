import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
`;

const Option = styled.option``;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const List = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.completed ? '#f7f7f7' : props.priority === 'low' ? 'green' : props.priority === 'high' ? '#ffcccc' : 'orange')};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const Text = styled.div`
  flex-grow: 1;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const EditButton = styled.button`
  padding: 4px 8px;
  background-color: #ffc107;
  color: #000;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  padding: 4px 8px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('normal');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
      priority,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput('');
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <Wrapper>
      <Title>Todo App</Title>
      <Form onSubmit={handleAddTodo}>
        <Input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={handleInputChange}
        />
        <Select value={priority} onChange={handlePriorityChange}>
          <Option value="low">Low</Option>
          <Option value="normal">Normal</Option>
          <Option value="high">High</Option>
        </Select>
        <Button type="submit">Add</Button>
      </Form>
      <List>
        {todos.map((todo) => (
          <Item key={todo.id} completed={todo.completed} priority={todo.priority}>
            <Text onClick={() => handleToggleTodo(todo.id)}>{todo.text}</Text>
            <ButtonGroup>
              <EditButton
                onClick={() => {
                  const newText = prompt('Enter new text', todo.text);
                  if (newText) {
                    const updatedTodos = todos.map((t) => {
                      if (t.id === todo.id) {
                        return {
                          ...t,
                          text: newText,
                        };
                      }
                      return t;
                    });
                    setTodos(updatedTodos);
                  }
                }}
              >
                Edit
              </EditButton>
              <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </DeleteButton>
            </ButtonGroup>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default App;
