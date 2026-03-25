const DeveloperRepository = require('../repository/developerRepository');
const bcrypt = require('bcryptjs');

const AuthService = {
    async register(login, senha) {
        const salt = await bcrypt.genSalt(10);
        const hashedSenha = await bcrypt.hash(senha, salt);
        return await DeveloperRepository.create(login, hashedSenha);
    },
    async login(login, senha) {
        const user = await DeveloperRepository.findByLogin(login);
        if (!user) throw new Error('Usuário não encontrado');
        
        const isMatch = await bcrypt.compare(senha, user.senha);
        if (!isMatch) throw new Error('Senha inválida');
        
        return user;
    }
};
module.exports = AuthService;