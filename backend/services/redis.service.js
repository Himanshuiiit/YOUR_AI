import Redis from 'ioredis';

// Initialize Redis using the connection URL
const redisClient = new Redis({
  port: 15461,
  host: 'redis-15461.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
  password: 'Eie94OGS1K21t0eFdmB00jzU6gtc4N2q',
  username: 'default',
  tls: {} // Required
});


redisClient.on('connect', () => {
    console.log('Redis connected');
});

redisClient.on('error', (err) => {
    console.error('Redis connection error:', err);
});

export default redisClient;
