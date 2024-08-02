// frontend/src/components/ConversationsList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@mui/material';

const ConversationsList = () => {
  const [conversations, setConversations] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/conversations`);
      setConversations(response.data);
    };
    fetchConversations();

    const ws = new WebSocket(process.env.REACT_APP_WS_URL);
    ws.onmessage = (event) => {
      const newConversation = JSON.parse(event.data);
      setConversations((prevConversations) => [...prevConversations, newConversation]);
    };
    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  return (
    <List>
      {conversations.map((conversation) => (
        <ListItem key={conversation.id}>
          <ListItemText primary={conversation.content} secondary={new Date(conversation.timestamp).toLocaleString()} />
        </ListItem>
      ))}
    </List>
  );
};

export default ConversationsList;
