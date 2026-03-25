const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: '127.0.0.1', //
    user: 'root',
    password: 'alunolab',
    database: 'sistema_dev',
    port: 3303, //
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    // Garante compatibilidade com versões novas do MySQL
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

// Teste de conexão imediato
pool.getConnection()
    .then(() => console.log("✅ Conectado ao MySQL com sucesso!"))
    .catch(err => {
        console.error("❌ Erro ao conectar ao banco:", err);
        process.exit(1); 
    });

module.exports = pool;