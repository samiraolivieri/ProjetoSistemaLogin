const db = require('../config/db');

const DeveloperRepository = {
    async create(login, hashedSenha) {
        const [result] = await db.execute(
            'INSERT INTO desenvolvedor (login, senha) VALUES (?, ?)',
            [login, hashedSenha]
        );
        return result.insertId;
    },
    async findByLogin(login) {
        const [rows] = await db.execute('SELECT * FROM desenvolvedor WHERE login = ?', [login]);
        return rows[0];
    }
};
module.exports = DeveloperRepository;