const AuthService = require('../service/authService');

const authController = {
    
    
    register: async (req, res) => {
        try {
           
            const { email, senha } = req.body;

           
            const userId = await AuthService.register(email, senha);

           
            res.status(201).json({ 
                message: 'Usuário registrado com sucesso!', 
                id: userId 
            });
        } catch (error) {
            
            res.status(400).json({ error: error.message });
        }
    },

   
    login: async (req, res) => {
        try {
            const { email, senha } = req.body;

          
            const user = await AuthService.login(email, senha);

           
            res.status(200).json({ 
                message: 'Login realizado com sucesso!', 
                user: {
                    id: user.id,
                    login: user.login 
                }
            });
        } catch (error) {
            
            res.status(401).json({ error: error.message });
        }
    }
};

module.exports = authController;