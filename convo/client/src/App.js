// frontend/src/App.js
import React from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import ConversationForm from './components/ConversationForm';
import ConversationsList from './components/ConversationsList';

const App = () => {
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: '20px' }}>
        <ConversationForm />
        <ConversationsList />
      </Container>
    </div>
  );
};

export default App;
