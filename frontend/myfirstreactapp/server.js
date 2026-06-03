const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simple hardcoded user for demo
const demoUser = {
  email: 'user@example.com',
  password: 'password123',
};

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ ok: false, message: 'Email and password required' });
  }

  if (email === demoUser.email && password === demoUser.password) {
    return res.json({ ok: true, message: 'Login successful', token: 'demo-token' });
  }

  return res.status(401).json({ ok: false, message: 'Invalid credentials' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Auth server running on http://localhost:${port}`);
});
