const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://lrtzhirubrzjsy:7dd246481cbc4abb02a644ee3a48ed13a9f8c6c7f7c66812aaf0f5baa039bc70@ec2-107-20-153-39.compute-1.amazonaws.com:5432/d419bdoq9h9ib2",
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

module.exports = client;
