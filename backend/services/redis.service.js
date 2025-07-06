const { createClient } = require('redis');

const client = createClient({
    username: 'default',
    password: 'Zc1Py1ceLAFVap3FPiOUmoMMpgXzqN1s',
    socket: {
        host: 'redis-19951.c84.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 19951
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();
