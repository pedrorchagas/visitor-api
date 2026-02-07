const express = require('express');
const redisService = require('./services/redis');

const app = express();
const port = 3000;

redisService.startRedis();

app.get('/health', (req, res) => {
  res.send({ health: 'ok', message: 'Pedro passou por aqui!!!' });
});

app.get('/', async (req, res) => {
  const visitors = await redisService.addVisitor();
  res.send({ visitors });
});

app.listen(port, () => {
  console.log(`Api iniciado na porta: ${port}`);
});
