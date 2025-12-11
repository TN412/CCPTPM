const express = require('express');
const router = express.Router();

// Example route
router.get('/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'User 1', email: 'user1@example.com' },
      { id: 2, name: 'User 2', email: 'user2@example.com' }
    ]
  });
});

router.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: 'User created',
    user: { id: Date.now(), name, email }
  });
});

module.exports = router;
