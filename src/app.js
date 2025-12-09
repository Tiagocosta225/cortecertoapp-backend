require('dotenv').config()
const express = require('express');
const routes = require('./controllers/routes');

const app = express();
app.use(express.json());

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'backend'
  });
});

// Application Routes
app.use(routes);

app.listen(3000, () => { 
  console.log('Servidor rodando na porta 3000');
});