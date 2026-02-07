const { createClient } = require('redis');

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

const startRedis = async () => {
  await client.connect();
  console.log('Redis iniciado com sucesso!');
};

const addVisitor = async () => {
  let visitors = parseInt(await client.get('visitors'), 10);
  if (!Number.isNaN(visitors)) {
    visitors += 1;
  } else {
    visitors = 1;
  }

  await client.set('visitors', visitors);

  return visitors;
};

module.exports = {
  startRedis,
  addVisitor,
};
