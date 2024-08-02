// backend/src/server.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');
const WebSocket = require('ws');
const conversationRoutes = require('./routes/conversationRoutes');
const { setupWebSocket } = require('./websocket');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cors());
app.use('/conversations', conversationRoutes);

const server = app.listen(3001, () => {
  console.log('Server running on http://localhost:3000');
});

const wss = new WebSocket.Server({ server });
setupWebSocket(wss, prisma);
