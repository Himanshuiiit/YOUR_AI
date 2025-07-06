const { createClient } = require('redis');

const redisClient = createClient({
  username: 'default',
  password: 'Zc1Py1ceLAFVap3FPiOUmoMMpgXzqN1s',
  socket: {
    host: 'redis-19951.c84.us-east-1-2.ec2.redns.redis-cloud.com',
    port: 19951,
    tls: true // Required for Redis Cloud
  }
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

(async () => {
  try {
    await redisClient.connect();
    console.log('Redis connected');
  } catch (err) {
    console.error('Redis connect failed', err);
  }
})();

module.exports = redisClient;
