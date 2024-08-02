// backend/src/controllers/conversationController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createConversation = async (req, res) => {
  const { userId, content } = req.body;
  try {
    const conversation = await prisma.conversation.create({
      data: { user_id: userId, content },
    });
    res.json(conversation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create conversation' });
  }
};

const getConversations = async (req, res) => {
  try {
    const conversations = await prisma.conversation.findMany();
    res.json(conversations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch conversations' });
  }
};

module.exports = {
  createConversation,
  getConversations,
};
