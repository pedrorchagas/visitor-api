const { createClient } = require('redis');

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

const startRedis = async () => {
  await client.connect();
  console.log('Redis iniciado com sucesso!');
};

const addVisitor = async () => {
  const visitors = await client.incr('visitors');

  return visitors;
};

module.exports = {
  startRedis,
  addVisitor,
};
