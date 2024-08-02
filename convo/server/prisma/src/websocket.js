// backend/src/websocket.js
const setupWebSocket = (wss, prisma) => {
    wss.on('connection', ws => {
      ws.on('message', async (message) => {
        const { userId, content } = JSON.parse(message);
        const conversation = await prisma.conversation.create({
          data: { user_id: userId, content },
        });
        wss.clients.forEach(client => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(conversation));
          }
        });
      });
    });
  };
  
  module.exports = { setupWebSocket };
  