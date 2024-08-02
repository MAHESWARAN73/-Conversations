// frontend/src/components/ConversationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

const ConversationForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/conversations`, { userId: 1, content });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={content}
        onChange={(e) => setContent(e.target.value)}
        label="New Conversation"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
        Add
      </Button>
    </form>
  );
};

export default ConversationForm;
